<template>
  <div class="back">
    <h1>{{ msg }}</h1>
    <h2>学校的姓名: {{ name }}</h2>
    <h2>学校的地址: {{ adress }}</h2>
  </div>
</template>

<script>
// 导入 pubsub-js 第三方库（用于消息订阅和发布）
import pubsub from "pubsub-js";

export default {
  name: "School",
  data() {
    return {
      msg: "展示学校信息",
      name: "尚硅谷",
      adress: "上海",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log(this);
      console.log("hello 消息收到了数据" + data);
    },
  },
  mounted() {
    /*
      订阅消息。subscribe 返回订阅消息的 id（类似于定时器）
      方式一：subscribe 中直接写回调。但要使用箭头函数。防止 this 指向出问题
    */
    /* this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      // 回调可接收参数：第一个为消息名 hello、第一个为消息内容（数据）
      console.log(data);
      console.log("有人发布了hello消息，hello消息的回调被执行了");
    }); */
    // 方式二：在 methods 中定义好回调，这里直接使用
    this.pubId = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // 组件销毁前，取消订阅消息、unsubscribe(订阅消息的id)
    pubsub.unsubscribe(pubId);
  },
};
</script>

<style scoped>
/* 
  Vue 最终会将样式 汇总到一起，所以样式名一样会产生冲突。引入 vue时，后者会覆盖前者
  需要在各自的vue 组件的 style 标签中添加属性 scoped
*/
.back {
  background-color: orange;
}
</style>