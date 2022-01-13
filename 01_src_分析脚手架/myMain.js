/*
  1. 一切的开端，该文件是整个项目的入口文件
*/

/*
  引入 Vue
  此处的 vue 其实是 vue/dist/vue.runtime.esm.js，它是残缺的，里面没有模板解析器，即无法识别 template
  解决办法：
    1. 引入完整版的 vue 路径为 vue/dist/vue.js
    2. 使用 render 函数
*/
import Vue from 'vue'
// 引入 App 组件，它是所有组件的父组件
import App from './App.vue'
// 关闭生成提示
Vue.config.productionTip = false

// 创建 Vue 实例对象
new Vue({
  el: "#app",
  /*
    将 app 组件放入容器内
    render 一个函数（Vue 调用），其中接收一个参数 createElement（也是函数），要有一个返回值
      createElement 创建元素，函数有一个参数，且具有返回值，还是一行语句，所以可以简写
      render(createElement): { return createElement(App) }  --> render: h => h(App)
  */
  render: h => h(App),

  /* template: `
    <h1> 你好呀 </h1>
  `, */
})

// vm.$mount() 指定服务的容器，也可使用 el 配置项

/*
  总结：
    1. vue.js 和 vue.runtime.xxx.js 的区别
      前者是完整版的 vue，包含 核心功能 + 模板解析器
      后者是运行版的 vue，只包含 核心功能
*/