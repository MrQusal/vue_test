<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生的姓名: {{ name }}</h2>
    <h2>学生的年纪: {{ age }}</h2>
  </div>
</template>

<script>
// 2. 导入 mixin
import { mixin } from "../mixin";

export default {
  name: "Student",
  data() {
    return {
      msg: "展示学生信息",
      name: "Tom",
      age: 12,
    };
  },
  // 此处发现 和 school 组件有相同的方法，可以利用 mixins 配置项来提取两个不同组件中相同的东西，最后再导入
  /* methods: {
    showName() {
      alert(this.name);
    },
  }, */

  // 3. 配置 mixins。局部配置
  mixins: [mixin],
};
</script>

<style>
.student {
  background-color: silver;
}
</style>