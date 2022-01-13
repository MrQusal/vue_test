// 1. 自定义插件（用于增强 Vue 的功能）。默认暴露
export default {
  // 插件必须要有一个 install 方法，可以接收一个参数，就是 Vue 的构造函数
  install(Vue) {
    console.log(Vue);
    console.log("install success!!");

    // 定义全局过滤器
    Vue.filter('mySlice', function (val) {
      console.log(val);
      return val.slice(0, 4)
    })

    // 自定义全局指令
    Vue.directive('fbind', {
      bind(element, binding) {
        element.value = binding.value
      },
      inserted(element, binding) {
        element.focus()
      },
      update(element, binding) {
        element.value = binding.value
      }
    })

    // 定义混合
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 200
        }
      },
    })

    // 在 Vue的原型对象上添加方法 此时 vc 和 vm 都能看到
    Vue.prototype.hello = function () {
      alert("这是Vue原型上的 hello 方法。你好")
    }
  }
}