<template>
  <div class="category">
    <h3>{{ cat }}分类</h3>
    <!-- 
      具名插槽 
      使用 name 属性，给不同的插槽起名
      -->
    <slot name="center">我是默认值，当使用值没有传入是，显示默认值</slot>
    <slot name="footer">我是默认值，当使用值没有传入是，显示默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["cat"],
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