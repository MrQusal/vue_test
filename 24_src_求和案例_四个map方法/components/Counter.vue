<template>
  <div class="counter">
    <h2>欢迎使用</h2>
    <h3>当前求和为 {{ sum }}</h3>
    <h4>放大 10 倍后的和为 {{ bigSum }}</h4>
    <h4>我是 {{ name }}，我的年纪是{{ age }}</h4>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
  </div>
</template>

<script>
// 引入 mapState
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    /* increment() {
      // 调用 store 对象中的 dispatch 方法（类似于请求分发，controller 层）
      // this.$store.dispatch("increment", this.num);
      // 对于没有业务逻辑的操作，可以跳过 dispatch，直接 commit，修改数据
      this.$store.commit("INCREMENT", this.num);
    },
    decrement() {
      this.$store.commit("DECREMENT", this.num);
    }, */
    /*
      借助 mapMutatins 来生成方法
        生成的方法中会调用 commit 联系 mutations 对象
        此时调用方法的地方，要传递参数
        也有 对象写法、数组写法
    */
    ...mapMutations({ increment: "INCREMENT", decrement: "DECREMENT" }),

    /* incrementOdd() {
      // 有业务逻辑的，需要调 dispatch，然后在 actions 中写逻辑
      this.$store.dispatch("incrementOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("incrementWait", this.num);
    }, */

    /*
      使用 mapActions 生成方法
        生成的方法中会调用 dispatch 联系 actions 对象
        此时调用方法的地方，要传递参数
        也有 对象写法、数组写法
    */
    ...mapActions({
      incrementOdd: "incrementOdd",
      incrementWait: "incrementWait",
    }),
  },
  mounted() {
    console.log(this.$store);
  },
  // 为了简化插值语法中的表示、使用计算属性
  computed: {
    // 1. 自己写
    /* sum() {
      return this.$store.state.sum;
    },
    name() {
      return this.$store.state.name;
    },
    age() {
      return this.$store.state.age;
    }, */
    /*
      2. 使用 Vuex 中的 mapState 自动生成（对象写法）
        mapState() 只管 state 映射到 computed
        mapState() 传入一个对象，key 是计算属性名、value（string）指定在 state 中找哪个数据
        返回值也是一个对象
    */
    // ...mapState({ sum: "sum", name: "name", age: "age" }),

    /*
      3. 使用 Vuex 中的 mapState 自动生成（数组写法）
        条件：当 返回的计算属性名 和 state 中的属性名相同时，触发简写
    */
    ...mapState(["sum", "age", "name"]),

    // 同理，使用 mapGetters 可以从 getters 映射到 computed
    ...mapGetters(["bigSum"]),
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