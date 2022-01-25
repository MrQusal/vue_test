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
  // 通过路由规则, 进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    // ...
    console.log("beforeRouteEnter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("user") === "admin") {
        next();
      } else {
        alert(
          `当前用户为${localStorage.getItem("user")}, 非 admin , 没有权限查看`
        );
      }
    }
  },
};
</script>

<style>
</style>