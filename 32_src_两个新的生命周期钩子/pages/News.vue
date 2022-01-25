<template>
  <ul>
    <!-- 需求:在路由进行跳转后,再跳回来,input 框的数据仍在 -->
    <h2 :style="{ opacity }">我是Tom</h2>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // 如果使用了缓存路由,那么组件就不会被销毁,所以定时器在此处就不会被关闭
  /* beforeDestroy() {
    console.log("News 组件即将被销毁");
    clearInterval(this.timer);
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log("#");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  }, */
  /*
    activated 和 deactivated 在使用了 vue-router 之后才会出现的钩子函数
    activated 代表路由组件被激活了(出现在页面上)
    deactivated 代表路由组件失活了(从页面上消失)
  */
  activated() {
    this.timer = setInterval(() => {
      console.log('@');
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News 组件失活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>