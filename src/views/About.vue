<template>
  <div class="about">
    <h1>Will it rain?</h1>
    <Lights v-if="weather" :isGreen="!rain" />
  </div>
</template>

<script>
import axios from "axios";
import Lights from "@/components/Lights.vue";

const API =
  "https://api.openweathermap.org/data/2.5/forecast?q=zonhoven&appid=c01303e2175e5909a94505ad5a392dff";

export default {
  name: "About",
  components: {
    Lights
  },
  data: function() {
    return {
      weather: null,
      rain: null,
    };
  },
  beforeMount() {
    this.fetchWeather();
  },
  methods: {
    fetchWeather() {
      axios.get(API).then(res => {
        this.weather = res;
        this.rain = res.data.list[0].rain;
      });
    }
  }
};
</script>
