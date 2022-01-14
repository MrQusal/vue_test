<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :addTask="addTask" />
        <List
          :taskList="taskList"
          :changeChecked="changeChecked"
          :deleteTask="deleteTask"
        />
        <Bottom
          :competed="competed"
          :total="total"
          :clearCompetedTasks="clearCompetedTasks"
          :handleBottomCheck="handleBottomCheck"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import List from "./components/List.vue";
import Bottom from "./components/Bottom.vue";

export default {
  name: "App",

  components: {
    Top,
    List,
    Bottom,
  },

  data() {
    return {
      taskList: [
        { id: "1", title: "吃饭", done: true },
        { id: "2", title: "睡觉", done: false },
        { id: "3", title: "打豆豆", done: false },
      ],
    };
  },

  methods: {
    // 定义函数，用于接收 Top 组件传入的数据。添加任务
    addTask(data) {
      console.log(data);
      this.taskList.unshift(data);
    },
    // 先将函数传入 List ，然后由 List 传入 Item。勾选或者取消勾选
    changeChecked(taskId) {
      this.taskList.forEach((task) => {
        if (taskId === task.id) {
          task.done = !task.done;
          return;
        }
      });
    },
    // 删除任务
    deleteTask(taskId) {
      console.log(taskId);
      for (let i = 0; i < this.taskList.length; i++) {
        const task = this.taskList[i];
        if (taskId === task.id) {
          this.taskList.splice(i, 1);
          return;
        }
      }
    },
    // 删除已完成任务
    clearCompetedTasks() {
      this.taskList = this.taskList.filter((task) => {
        return !task.done;
      });
    },
    // 处理底部的全选、全不选
    handleBottomCheck(flag) {
      this.taskList.forEach((task) => {
        task.done = flag;
      });
    },
  },

  computed: {
    competed() {
      // 方法一：计数统计
      /* let count = 0;
      this.taskList.forEach((task) => {
        if (task.done) {
          count++;
        }
      });
      return count; */
      // 方法二：reduce 统计，用法看文档
      return this.taskList.reduce((pre, cur) => {
        return pre + (cur.done ? 1 : 0);
      }, 0);
    },
    total() {
      return this.taskList.length;
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>