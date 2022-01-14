<template>
  <div class="back font-bigger">
    <h1>{{ msg }}</h1>
    <h2>学生的姓名: {{ name }}</h2>
    <h2>学生的年纪: {{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "展示学生信息",
      name: "Tom",
      age: 12,
    };
  },
};
</script>

<style scoped>
/* 
  Vue 最终会将样式 汇总到一起，所以样式名一样会产生冲突。引入 vue时，后者会覆盖前者
  需要在各自的vue 组件的 style 标签中添加属性 scoped
*/
.back {
  background-color: silver;
}
</style>