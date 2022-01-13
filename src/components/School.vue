<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <h2>学校的姓名: {{ name }}</h2>
    <h2>学校的地址: {{ adress }}</h2>
    <input type="text" v-fbind="name">
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

<style>
.school {
  background-color: orange;
}
</style>