<template>
  <!-- 组件的结构 -->
  <div>
    <h2>学校的名称: {{ name }}</h2>
    <h2>学校的地址: {{ adress }}</h2>
  </div>
</template>

<script>
// 交互的代码（数据，方法等）
// 默认暴露
export default {
  // 对于组件来说 const hello = Vue.extend({}) ---> 可以省略 Vue.extend，直接写配置对象
  // name 一般保证和文件名一致
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      adress: "上海",
    };
  },
};
</script>

<style lang="">
/* 组件的样式 */
</style>