<template>
  <div class="student">
    <h1>{{ msg | mySlice }}</h1>
    <h2>学生的姓名: {{ name }}</h2>
    <h2>学生的年纪: {{ age }}</h2>
    <button @click="hello">点我测试 hello 方法</button>
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

<style>
.student {
  background-color: silver;
}
</style>