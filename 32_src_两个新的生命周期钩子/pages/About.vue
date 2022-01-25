<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    console.log("About 已被挂载");
  },
  // 在进行路由切换时，默认为销毁其他组件
  beforeDestroy() {
    console.log("About 即将被销毁");
  },
};
</script>

<style>
</style>