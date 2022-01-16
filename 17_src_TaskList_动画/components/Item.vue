<template>
  <!-- 
    添加过渡效果 
      方法一：在 item 组件中添加 transition
  -->
  <transition name="task" appear>
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
        <span v-show="!task.isEdit">{{ task.title }}</span>
        <input
          v-show="task.isEdit"
          type="text"
          :value="task.title"
          @blur="EditTaskDone(task, $event)"
          ref="inputId"
        />
      </label>

      <button class="btn btn-danger" @click="deleteTaskSub(task)">删除</button>
      <button
        v-show="!task.isEdit"
        class="btn btn-edit"
        @click="EditTask(task)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
import pubsub from "pubsub-js";

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
        // this.$bus.$emit("deleteTask", task.id);
        // 使用 pubsub 消息的订阅与发送
        pubsub.publish("deleteTask", task.id);
      } else {
        alert("取消删除成功");
        return;
      }
    },
    // 处理编辑
    EditTask(task) {
      // 添加响应式的属性
      if (task.hasOwnProperty("isEdit")) {
        task.isEdit = true;
      } else {
        this.$set(task, "isEdit", true);
      }

      /*
        想实现出现 input 后，获取焦点
          1. 自然而然，想到了 focus。实际上不起作用
            原因：task.isEdit = true; 执行后，并没有直接重新解析模板。而是先往下走。然后再解析模板（执行的时机问题）
            也就是说 focus 调用时，页面上还没有输入框
          
          2. 间接解决：使用 setTimeout 定时器解决

          3. Vue 提供的方案：使用 $nextTick 解决，即等页面更新后，再执行其中的回调
      */
      /* setTimeout(() => {
        this.$refs["inputId"].focus();
      }, 100); */
      this.$nextTick(function () {
        this.$refs.inputId.focus();
      });
    },
    // 编辑完成
    EditTaskDone(task, event) {
      task.isEdit = false;
      const name = event.target.value;
      if (name === "") {
        alert("任务名不能为空");
        return;
      }
      // 使用事件总线触发 updateTask 事件
      this.$bus.$emit("updateTask", task.id, name);
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

/* 添加过渡的样式 */
.task-enter-active {
  animation: dsiappear 0.4s linear;
}

.task-leave-active {
  animation: dsiappear 0.4s linear reverse;
}

@keyframes dsiappear {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>