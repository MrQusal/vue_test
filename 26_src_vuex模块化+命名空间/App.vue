<template>
  <div class="container">
    <Counter />
    <hr>
    <Person />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: {
    Counter,
    Person,
  },
};
</script>

<style>
</style>