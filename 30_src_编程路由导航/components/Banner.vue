<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="forward">前进</button>
    <button @click="back">后退</button>
    <button @click="test">go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    forward() {
      // this.$router 的 forward 方法实现路由向前跳转
      this.$router.forward();
    },
    back() {
      // this.$router 的 back 方法实现路由向后跳转
      this.$router.back();
    },
    test() {
      // this.$router 的 go 方法实现路由跳转，根据传入参数：正数（向前）、负数（向后）
      this.$router.go(2);
    },
  },
};
</script>

<style>
</style>