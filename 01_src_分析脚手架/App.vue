<template>
  <!-- 模板里必须有个根元素，div 在此处为根元素 -->
  <div>
    <div><img src="./assets/logo.png" alt="logo" /></div>
    <School></School>
    <Stu></Stu>
  </div>
</template>

<script>
// 引入组件
import School from "./components/School.vue";
import Stu from "./components/Stu.vue";

export default {
  // 2. App 组件是大哥，管理下面的子组件。自身被 vm 管理
  name: "App",
  // 注册组件
  components: {
    School,
    Stu,
  },
};
</script>

<style>
</style>