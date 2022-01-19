<template>
  <div class="counter">
    <h2>欢迎使用</h2>
    <!-- 直接读取 store.state 对象中的sum -->
    <h3>当前求和为 {{ $store.state.sum }}</h3>
    <!-- 
      假设拿到的数据，需要进行加工，再展示
        1. 使用计算属性（只有当前组件使用，不能跨组件）
        2. 使用 store 中的全新配置项 getters
       -->
    <h4>放大 10 倍后的和为 {{ $store.getters.bigSum }}</h4>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      // 默认选择为 1
      num: 1,
    };
  },
  methods: {
    increment() {
      // 调用 store 对象中的 dispatch 方法（类似于请求分发，controller 层）
      // this.$store.dispatch("increment", this.num);
      // 对于没有业务逻辑的操作，可以跳过 dispatch，直接 commit，修改数据
      this.$store.commit("INCREMENT", this.num);
    },
    decrement() {
      this.$store.dispatch("decrement", this.num);
    },
    incrementOdd() {
      // 有业务逻辑的，需要掉 dispatch，然后在 actions 中写逻辑
      this.$store.dispatch("incrementOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.num);
    },
  },
  mounted() {
    // 验证 vuex 是否可用，看vc/vm中是否有 $store 对象
    // console.log(this);
    console.log(this.$store);
  },
};
</script>

<style>
.counter {
  margin: 0 auto;
  width: 400px;
  height: 300px;
  border: 1px solid black;
  text-align: center;
}
button {
  margin: 0 5px;
}
</style>