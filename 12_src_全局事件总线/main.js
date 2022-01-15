// 入口文件
// 1. 导入 vue
import Vue from 'vue';
// 2. 导入父组件
import App from './App.vue'

// 关闭开发提示
Vue.config.productionTip = false

// 创建 Vue 实例
new Vue({
  el: '#root',
  // 调用 render 将 app组件放入容器
  render: h => h(App),
  /*
    引导：现在的目的是，有一个东西，所有的 vc 都能看到，并且可以有 $on、$off、$emit 等方法
      1. window，可以实现都看到，但没有方法
      2. Vue.prototype； Vue 的原型对象，而且 $on、$off、$emit 就在原型对象上
    
    所以要使用 Vue.prototype.$bus = vm 实例
      但是 vm 实例 是 new Vue 出来的。如果先接收，再添加到原型上就晚了。所以要借助 beforeCreate
  */
  beforeCreate() {
    // $bus 是约定俗成、this 就是当前的 vm 对象。安装全局事件总线
    Vue.prototype.$bus = this;
  }
})