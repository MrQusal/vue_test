<template>
  <div id="root">
    <button @click="getStus">获取学生信息</button>
    <br /><br />
    <button @click="getCars">请求获取汽车数据</button>
  </div>
</template>

<script>
// 导入 axios
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStus() {
      // 2. 这里8080 是前台端口
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>