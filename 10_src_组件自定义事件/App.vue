<template>
  <div class="app">
    <h1>{{ msg }}，学生的姓名 {{ StuName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 
        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 
        （写法一，使用v-on或@直接将事件绑定到组件对应的 vc 上）
        以下代码 v-on:test="demo" 表示：
          给 Student 组件的实例对象 vc 身上绑定一个事件 test，当 test 事件触发时，会调用 demo 函数
     -->
    <!-- <Student v-on:test="getStudentName" /> -->

    <!-- 
      通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 
      （写法二，使用 ref，然后通过 $refs拿到组件对应的实例对象，再通过 $on 来绑定事件）

      如果想让组件绑定 原生js 事件。要在时间名后添加 native 修饰符标识
     -->
    <Student ref="stu" @click.native="show" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好呀",
      StuName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名", name);
      this.StuName = name;
    },
    show() {
      alert("show");
    },
  },

  mounted() {
    console.log("使用 ref ");
    this.$refs["stu"].$on("test", this.getStudentName);
    // this.$refs["stu"].$once("test", this.getStudentName); // 使用 $once 使得绑定的事件只触发一次
  },
};
</script>

<style>
/* 一般 App 组件中的样式不用 scoped，类似于全局样式 */
.app {
  background-color: #bfa;
}
</style>