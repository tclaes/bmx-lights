<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-512x512.png" width="120px" />
    <Lights v-if="!isLoading" :isGreen="green" />
  </div>
</template>

<script>
// @ is an alias to /src
import Lights from "@/components/Lights.vue";
import { db } from "../db.js";
import axios from "axios";

export default {
  name: "Home",
  data: function() {
    return {
      green: null,
      weather: null,
      rain: null,
      isLoading: true,
    };
  },
  async beforeMount() {
    await this.fetchWeather();
    await this.$bind(
      "light",
      db.collection("trainings").doc("zkc8tGZxed90LvxpRhUc")
    ).then(res => {
      this.isLoading = !this.isLoading;
      this.green = res.isHappening && !this.rain;
    });
  },
  components: {
    Lights
  },
  methods: {
    fetchWeather(place = "zonhoven") {
      const API = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=c01303e2175e5909a94505ad5a392dff`;
      axios.get(API).then(res => {
        this.weather = res;
        this.rain = res.data.list[0].rain;
      });
    },
    setTrainingData() {
      db.collection("trainings")
        .doc("zkc8tGZxed90LvxpRhUc")
        .update({ isHappening: this.green });
    },
    toggle: function() {
      this.green = !this.green;
      this.setTrainingData();
    }
  }
};
</script>
