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
import { nanoid } from "nanoid";

export default {
  name: "Top",
  data() {
    return {
      inputStr: "",
    };
  },
  methods: {
    addTaskSub() {
      console.log(this.inputStr);
      if (!this.inputStr) {
        alert("请输入任务");
        return;
      }
      // 借助 nanoid，类似于 uuid，创建一个任务对象
      const task = { id: nanoid(), title: this.inputStr, done: false };
      // 触发 add 事件，事件的回调在 App 组件中
      this.$emit('add', task);
      this.inputStr = "";
    },
  },
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