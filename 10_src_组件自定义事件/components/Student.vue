<template>
  <div class="back">
    <h1>{{ msg }}</h1>
    <h2>学生的姓名: {{ name }}</h2>
    <h2>学生的年纪: {{ age }}</h2>
    <button @click="sendStudentName">点我发送学生名给父组件</button>
    <button @click="unbind">点我解绑 test 事件</button>
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
  methods: {
    sendStudentName() {
      // 触发组件实例上对象身上的 test 事件，使用 $emit()
      this.$emit("test", this.name);
    },
    unbind() {
      // $on 绑定事件、$off 解绑事件（传入字符串，解绑一个。传入字符串数组，解绑多个。不传参数，解绑所有）
      this.$off("test")
    },
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