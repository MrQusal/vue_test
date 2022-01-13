<template>
  <div>
    <h1 id="theDOM" ref="theD">{{ msg }}</h1>
    <button @click="showDOM">点我获取 DOM</button>
    <School ref="sch" id="sch" />
  </div>
</template>

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    School,
  },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    // 点击获取 dom
    showDOM() {
      // 对于 html 标签，几乎没区别，获取的都是 DOM 元素
      // 1. 原生 js 获取
      let d = document.getElementById("theDOM");
      console.log(d);
      // 2. Vue 提供了 ref 属性，功能类似于 id
      let vd = this.$refs["theD"];
      console.log(vd);

      // 对于组件标签
      // 1. 原生 js 获取的是组件网站的 html 结构
      let s = document.getElementById("sch");
      console.log(s);
      // 2. ref 读取的是 School 组件实例
      let sd = this.$refs.sch;
      console.log(sd);
    },
  },
};
</script>

<style>
</style>