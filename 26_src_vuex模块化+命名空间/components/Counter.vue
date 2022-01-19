<template>
  <div class="counter">
    <h2>欢迎使用</h2>
    <h3>当前求和为 {{ sum }}</h3>
    <h4>放大 10 倍后的和为 {{ bigSum }}</h4>
    <h4>我是 {{ name }}，我的年纪是{{ age }}</h4>
    <h4 style="color: red">Person 组件的的总人数为 {{ personList.length }}</h4>
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
    ...mapMutations("counterAbout", {
      increment: "INCREMENT",
      decrement: "DECREMENT",
    }),
    ...mapActions("counterAbout", {
      incrementOdd: "incrementOdd",
      incrementWait: "incrementWait",
    }),
  },
  computed: {
    // 使用 mapXXX 时指定 counterAbout 对象
    ...mapState("counterAbout", ["sum", "age", "name"]),
    ...mapState("personAbout", ["personList"]),
    ...mapGetters("counterAbout", ["bigSum"]),
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