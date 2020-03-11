<template>
  <div class="loggedIn">
    <Lights />
    <button v-if="loggedIn" v-on:click="toggle">Toggle</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isLoggedIn: true,
    };
  }
};
</script>
