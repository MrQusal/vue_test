<template>
  <div class="counter">
    <h2>欢迎使用</h2>
    <h3>当前求和为 {{ sum }}</h3>
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
      // 初始sum为 0
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.num;
    },
    decrement() {
      this.sum -= this.num;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.num;
      } else {
        return;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.num;
      }, 500);
    },
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