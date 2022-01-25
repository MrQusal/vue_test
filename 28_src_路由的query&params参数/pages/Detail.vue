<template>
  <ul>
    <li>消息的id为 {{ $route.query.id }}</li>
    <li>消息的title为 {{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    // vc 实例上的 $route 对象上有组件对应路由的详情，query 对象上有路径中 ? 后的参数
    // 例如： this.$route.query.XXX
    console.log(this.$route);
  },
};
</script>

<style>
</style>