// 入口文件
// 1. 导入 vue
import Vue from 'vue';
// 2. 导入父组件
import App from './App.vue'
// 导入 vue-router
import VueRouter from 'vue-router';
// 导入 router
import router from './router/index';
// 关闭开发提示
Vue.config.productionTip = false

// 应用 VueRouter
Vue.use(VueRouter)
// 创建 Vue 实例
new Vue({
  el: '#root',
  // 调用 render 将 app组件放入容器
  render: h => h(App),
  // 配置路由
  router: router
})