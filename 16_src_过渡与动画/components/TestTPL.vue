<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 
      transition 标签中还有其他属性
        1. name="animate__animated animate__bounce" 代表使用 animate.css 动画
        2. enter-active-class 指定进入的动画样式
        3. leave-active-class 指定离开的动画样式
        后面的样式名查看 animate.css 官网
     -->
    <transition 
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__fadeInDown"
    leave-active-class="animate__fadeOutDown"
    >
      <h1 v-show="isShow">你好呀!</h1>
    </transition>
  </div>
</template>

<script>
// 使用第三方提供的库 animate.css
import "animate.css";

export default {
  name: "TestTPL",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h1 {
  background-color: orange;
}
</style>