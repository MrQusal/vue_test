<template>
  <div class="category">
    <h3>{{ cat }}分类</h3>
    <!-- slot 标签也可以传递数据，传递给数据的使用者 -->
    <slot :games="games">我是默认值，当使用值没有传入是，显示默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["cat"],
  //  数据在 子组件这里
  data() {
    return {
      games: ["超级玛丽", "拳皇", "合金弹头"],
    };
  },
};
</script>

<style>
.category {
  width: 200px;
  height: 300px;
  background: #bfa;
}
h3 {
  background: orange;
  text-align: center;
}
</style>