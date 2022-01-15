<template>
  <ul class="todo-main">
    <!-- props 组件间传参数，直接传对象 -->
    <Item
      v-for="task in taskList"
      :key="task.id"
      :task="task"
      :changeChecked="changeChecked"
      :deleteTask="deleteTask"
    />
  </ul>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "List",
  components: {
    Item,
  },
  props: ["taskList", "changeChecked", "deleteTask"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>