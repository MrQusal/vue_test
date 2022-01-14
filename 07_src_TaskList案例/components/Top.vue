<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model.trim="inputStr"
      @keyup.enter="addTaskSub"
    />
  </div>
</template>

<script>
// 引入 nanoid
import { nanoid } from "nanoid";

export default {
  name: "Top",
  data() {
    return {
      inputStr: "",
    };
  },
  methods: {
    // 此处也可以借助，event.target.value 来获取
    addTaskSub() {
      console.log(this.inputStr);
      // 判断空字符串
      if (!this.inputStr) {
        alert("请输入任务");
        return;
      }
      // 借助 nanoid，类似于 uuid，创建一个任务对象
      const task = { id: nanoid(), title: this.inputStr, done: false };
      /*
        逻辑：Top 组件中创建了一个对象，需要传给 List 组件。但是 Top 和 List 是兄弟。无法通过 props 来传递数据
        所以：将 List 组件中的数据，放入父组件 [App] 中，然List 和 Top 组件都能看到
        而为了实现，Top 组件（子组件）向 App 组件（父组件）传递数据
          1. 在 App 组件中定义方法，然后将方法传给 Top 组件
          2. 在 Top 组件中，用 props 接收。然后在合适时调用
      */
      // 通知 App 组件去添加一个 task
      this.addTask(task);
      this.inputStr = "";
    },
  },
  props: ["addTask"],
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>