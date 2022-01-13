<template>
  <div class="school">
    <h1>{{ msg }}</h1>
    <!-- 此处的 showName mixin.js 中的函数。-->
    <h2 @click="showName">学校的姓名: {{ name }}</h2>
    <h2>学校的地址: {{ adress }}</h2>
  </div>
</template>

<script>
// 2. 导入 mixin
import { mixin } from "../mixin";

export default {
  name: "School",
  data() {
    return {
      msg: "展示学校信息",
      name: "尚硅谷",
      adress: "上海",
    };
  },
  // 此处发现 和 student 有相同的组件，可以利用 mixins 配置项来提取两个不同组件中相同的东西，最后再导入
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
.school {
  background-color: orange;
}
</style>