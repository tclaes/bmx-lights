<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-512x512.png" width="120px" />
    <Lights v-if="isLoaded" :isGreen="green" />
    <button v-if="loggedIn" v-on:click="toggle">Toggle</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Lights from "@/components/Lights.vue";
import { db } from "../db.js";

export default {
  name: "Home",
  data: function() {
    return {
      green: null,
      loggedIn: true,
      isLoaded: false
    };
  },
  created() {
    this.$bind(
      "light",
      db.collection("trainings").doc("zkc8tGZxed90LvxpRhUc")
    ).then(green => {
      this.green = green.isHappening;
      this.isLoaded = true;
    });
  },
  components: {
    Lights
  },
  methods: {
    setTrainingData() {
      db.collection("trainings")
        .doc("zkc8tGZxed90LvxpRhUc")
        .update({ isHappening: this.green })
        .then(console.log("Updated"));
    },
    toggle: function() {
      this.green = !this.green;
      this.setTrainingData();
    }
  }
};
</script>
