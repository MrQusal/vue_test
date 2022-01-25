<template>
  <ul>
    <!-- 需求:在路由进行跳转后,再跳回来,input 框的数据仍在 -->
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  beforeDestroy() {
    console.log("News 组件即将被销毁");
  },
};
</script>

<style>
</style>