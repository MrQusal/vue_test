<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition name="hello" appear>
      <h1 v-show="isShow">你好呀!</h1>
    </transition> -->
    <!-- 多个元素使用相同的样式，用 transition-group 包裹，并且一定要绑定 key -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" :key="1">你好呀!</h1>
      <h1 v-show="isShow" :key="2" >Tom</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TestTransition",
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
  transition: transform 2s linear;
}
/* 利用过渡实现 */

.hello-enter {
  /* 进入的起点 */
  transform: translateX(-100%);
}
.hello-enter-to {
  /* 进入的终点 */
  transform: translateX(0);
}

.hello-leave {
  /* 离开的起点 */
  transform: translateX(0);
}
.hello-leave-to {
  /* 离开的终点 */
  transform: translateX(-100%);
}
/* 
  动画中需要记住的几个样式
    v-enter         进入的起点
    v-enter-active  进入的过程中
    v-enter-to      进入的终点
    v-leave         离开的起点
    v-leave-active  离开的过程中
    v-leave-to      离开的重点
*/
</style>