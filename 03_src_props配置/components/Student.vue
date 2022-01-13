<template>
  <div class="student">
    <h1>{{ msg }}</h1>
    <h2>学校的姓名: {{ name }}</h2>
    <h2>学校的性别: {{ sex }}</h2>
    <h2>学校的年纪: {{ age }}</h2>
    <!-- 
      对于 props 中接收到是数据，最好不要进行修改 
      如果非要修改，为了防止报错，最好在 data 中使用中间变量接收。然后在页面中修改中间变量
    -->
    <button @click="modifyAge">尝试修改age</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "展示学生信息",
      // 如果 data 和 props 中属性名相同。控制台报错，并且以 props 优先
      // name: '李四',
    };
  },
  methods: {
    modifyAge() {
      this.age = 99;
    },
  },
  // 2. data 中的数据不写死，这里用 props 来接收
  // 1. 完整写法，类型限制 + 默认值指定 + 必要性限制
  /* props: {
    name: {
      type: String,
      require: true,
    },
    sex: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      default: 18,
    },
  }, */
  // 2. 简略写法1 只进行数据限制

  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  // 3. 简略写法2，简单声明（用的多）
  props: ["name", "sex", "age"],
};
</script>

<style>
.student {
  background-color: rosybrown;
}
</style>