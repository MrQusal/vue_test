<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <!-- 
            对于多级路由，在跳转时
              to 属性值要带上 父级路径
           -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 
        对路由进行缓存(router-view 展示在哪里,就在它的外层包裹 keep-alive)
          使用 keep-alive 标签包裹
          include 属性指定 哪个(组件名) 组件可以被缓存
          多个组件需要缓存,使用数组即可  :include="['News', 'Message']"
         -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>