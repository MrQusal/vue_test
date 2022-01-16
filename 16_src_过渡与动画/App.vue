<template>
  <div id="root">
    <TestAnimation />
    <TestTransition />
    <TestTPL />
  </div>
</template>

<script>
import TestAnimation from "./components/TestAnimation.vue";
import TestTransition from "./components/TestTransition.vue";
import TestTPL from './components/TestTPL.vue';

export default {
  name: "App",

  components: {
    TestAnimation,
    TestTransition,
    TestTPL
  },
};
</script>

<style>
</style>