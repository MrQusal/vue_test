<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始 html 中使用 a 标签实现页面的跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->
          <!--  
              vue-router 提供的 router-link 标签完成路径的变化
                to 属性，指定跳转的路径（在 router 中配置的 path）
                active-class 属性，指定激活路径时，标签的样式（此处为高亮）
          -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about"
            >About</router-link
          >
          <!-- 
            replace 属性
              在进行路由跳转时，默认时 push 模式（在栈中追加）
              开启 replace，表示  替换（直接替换栈中的路由记录）
           -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 使用 router-view 标签，将组件放在此处 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Banner,
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style>
</style>