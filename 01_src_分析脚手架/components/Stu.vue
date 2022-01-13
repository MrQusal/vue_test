<template>
  <div>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学名年纪: {{ age }}</h2>
    <button @click="addAge">点我年纪 + 1</button>
  </div>
</template>


<script>
export default {
  name: "Stu",
  data() {
    return {
      name: "ToM",
      age: 12,
    };
  },
  methods: {
    addAge() {
      this.age++;
    },
  },
};
</script>

<style >
</style>