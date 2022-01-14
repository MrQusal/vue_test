<template>
  <div>
    <School />
    <Student />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
};
</script>

<style>
/* 一般 App 组件中的样式不用 scoped，类似于全局样式 */
  .font-bigger{
    font-size: 50px;
  }
</style>