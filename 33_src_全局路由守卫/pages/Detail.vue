<template>
  <ul>
    <li>消息的id为 {{ id }}</li>
    <li>消息的title为 {{ title }}</li>
    <!-- <li>a: {{a}}, b: {{b}}</li> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
  mounted() {
    // vc 实例上的 $route 对象上有组件对应路由的详情，query 对象上有路径中 ? 后的参数
    // vc 实例上的 $route 对象上有组件对应路由的详情，params 对象上有路径中 / 后的参数
    // 例如： this.$route.query.XXX
    console.log(this.$route);
  },
};
</script>

<style>
</style>