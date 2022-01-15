<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 修改为组件自定义事件 来实现 子向父传数据 -->
        <Top v-on:add="addTask" />
        <List
          :taskList="taskList"
          :changeChecked="changeChecked"
          :deleteTask="deleteTask"
        />
        <Bottom
          :competed="competed"
          :total="total"
          @clearTask="clearCompetedTasks"
          :handleBottomCheck="handleBottomCheck"
          ref="bottom"
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
      // 初始化为 向 localStorage 读取最新的数据。为了防止读到 null 然后调用.length 属性报错。放一个空数组
      taskList: JSON.parse(localStorage.getItem("taskList")) || [],
    };
  },

  mounted() {
    // 给 bottom 组件绑定 handleCheck 事件，事件的回调为 handleBottomCheck
    this.$refs["bottom"].$on("handleCheck", this.handleBottomCheck);
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

  // 借助 watch 监视、本地存储 localStorage 来实现（此时初始任务列表为空）
  watch: {
    /* taskList(value) {
      // 当 taskList 发生改变时，向 localStorage 添加一份最新的 taskList 数据
      localStorage.setItem("taskList", JSON.stringify(value));
    }, */
    taskList: {
      // 开启深度监视（防止 勾选任务后，刷新又重置的BUG，即watch默认无法监视数组中某对象的属性变化）
      deep: true,
      handler(value) {
        localStorage.setItem("taskList", JSON.stringify(value));
      },
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