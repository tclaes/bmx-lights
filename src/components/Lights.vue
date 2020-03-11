<template>
  <div class="lights">
    <div class="light-bar">
      <div class="light" :class="{ red: !isGreen }"></div>
      <div class="light"></div>
      <div class="light" :class="{ green: isGreen }"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Lights extends Vue {
  @Prop() isGreen!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.light-bar {
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 65px;
}

.light {
  background: white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 3px;
}

.green {
  background: green;
}

.red {
  background: red;
}
</style>
