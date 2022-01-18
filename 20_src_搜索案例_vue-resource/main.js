// 入口文件
// 1. 导入 vue
import Vue from 'vue';
// 2. 导入父组件
import App from './App.vue'
// 导入 vue-resource
import vueResource from "vue-resource";
// 关闭开发提示
Vue.config.productionTip = false

// 使用 vue-resource 插件
Vue.use(vueResource);
// 创建 Vue 实例
new Vue({
  el: '#root',
  // 调用 render 将 app组件放入容器
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})