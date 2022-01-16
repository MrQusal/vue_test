<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 
      Vue 中向使用动画
        1. 定义两个动画
          动画的名字（样式的名字固定的）
            不指定 name，样式名为 v-enter-active 、v-leave-enter
            指定 name="hello"，样式名为 hello-enter-active 、hello-leave-enter
        2. 在要变化的便签外 套上 <transition> 标签
        3. appear 或者 :appear="true" 标识页面一上来就执行一次动画
     -->
    <transition appear name="forH1">
      <h1 v-show="isShow">你好呀!</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TestAnimation",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.forH1-enter-active {
  animation: disappear 2s linear reverse;
}

.forH1-leave-active {
  animation: disappear 2s linear;
}

/* 定义关键帧 */
@keyframes disappear {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>