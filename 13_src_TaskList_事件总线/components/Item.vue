<template>
  <li>
    <label>
      <!-- 使用插值语法 -->
      <input
        type="checkbox"
        :checked="task.done"
        @change="handleChange(task.id)"
      />
      <!-- 借助 v-model 双向数据绑定也能实现。但不建议这么做（props传入的数据不要修改） -->
      <!-- <input type="checkbox" v-model="task.done" /> -->
      <span>{{ task.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTaskSub(task)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  // 声明接收 task 对象
  props: ["task"],
  methods: {
    // 处理勾选
    handleChange(taskId) {
      console.log(taskId);
      // 触发总线上的 changeChecked 事件
      this.$bus.$emit("changeChecked", taskId);
    },
    // 处理删除
    deleteTaskSub(task) {
      console.log(task.id);
      const confirmRes = confirm(`是否删除任务${task.title}`);
      if (confirmRes) {
        this.$bus.$emit("deleteTask", task.id);
      } else {
        alert("取消删除成功");
        return;
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
/* 鼠标悬停时 添加背景色，即高亮 */
li:hover {
  background-color: #ddd;
}
/* 并且显示按钮 */
li:hover button {
  display: block;
}
</style>