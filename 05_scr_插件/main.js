// 入口文件
// 1. 导入 vue
import Vue from 'vue';
// 2. 导入父组件
import App from './App.vue'

// 3. 引入插件
import plugins from "./plugins"
// 关闭开发提示
Vue.config.productionTip = false


// 3. 使用 Vue.use方法来使用插件
Vue.use(plugins)
// 创建 Vue 实例
new Vue({
  el: '#root',
  // 调用 render 将 app组件放入容器
  render: h => h(App),
})