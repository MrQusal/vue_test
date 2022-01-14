<template>
  <div class="back">
    <h1>{{ msg }}</h1>
    <h2>学校的姓名: {{ name }}</h2>
    <h2>学校的地址: {{ adress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "展示学校信息",
      name: "尚硅谷",
      adress: "上海",
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
  background-color: orange;
}
</style>