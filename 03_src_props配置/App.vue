<template>
  <div>
    <!-- 需求：组件要进行复用，但是展示的数据不一样 -->
    <!-- 
        1. 在使用组件时，传入数据
          这里的 :age="18" 是指 传入的是数字18。如果使用 age="18"，代表传入的是字符串 '18'
     -->
    <Student name="Tom" sex="男" :age="18" />
    <Student name="Ruby" sex="女" :age="22" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>