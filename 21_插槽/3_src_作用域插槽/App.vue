<template>
  <div class="container">
    <!-- 
      希望生成不同的结构
      数据固定，但展示数据的结构由使用者决定，可以使用 作用域插槽
       -->
    <!-- 1. 无序列表 -->
    <Category cat="游戏">
      <!-- 
        template 定义作用域插槽、scope 属性接收数据
       -->
      <template scope="data">
        <ul>
          <li v-for="(item, index) in data.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <!-- 2. 有序列表 -->
    <Category cat="游戏">
      <!-- 
        template 定义作用域插槽、scope 属性接收数据
          scope 默认接收的数据为对象（因为可以接收多个数据）、并且支持解构赋值
       -->
      <template scope="{games}">
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <!-- 3. h4 标题 -->
    <Category cat="游戏">
      <!-- 
        template 定义作用域插槽、slot-scope 属性也可以接收数据
       -->
      <template slot-scope="{ games }">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>