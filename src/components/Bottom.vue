<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!-- 方法一 -->
      <!-- <input
        type="checkbox"
        @change="handleBottomCheckSub"
        :checked="checked"
      /> -->

      <!-- 方法二 -->
      <input type="checkbox" v-model="checked" />
    </label>
    <span>
      <span>已完成 {{ competed }}</span> / 全部 {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearCompetedTasksSub">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  props: ["competed", "total", "clearCompetedTasks", "handleBottomCheck"],
  methods: {
    // 清除所有的已完成任务
    clearCompetedTasksSub() {
      const confirmRes = confirm("是否清除已完成的任务");
      if (confirmRes) {
        this.clearCompetedTasks();
      } else {
        alert("取消删除");
        return;
      }
    },
    // 处理底部的勾选逻辑
    handleBottomCheckSub(event) {
      console.log(event.target.checked);
      this.handleBottomCheck(event.target.checked);
    },
  },
  computed: {
    // 方法一
    /* checked() {
      return this.competed === this.total && this.total > 0;
    }, */

    // 方法二
    checked: {
      get() {
        return this.competed === this.total && this.total > 0;
      },
      set(value) {
        this.handleBottomCheck(value);
      },
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>