<template>
  <div class="container">
    <!-- 
      在这里使用双标签，然后在标签内直接写结构
      在子组件中用 slot 标签接收即可
     -->
    <Category cat="美食">
      <img
        src="http://www.06ps.com/d/file/2017/0720/1500537640721.jpg"
        width="100%"
        alt="美食"
      />
    </Category>
    <Category cat="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category cat="电影">
      <iframe
        style="width: 100%"
        frameborder="0"
        src="https://v.qq.com/txp/iframe/player.html?vid=x0033pef1cg"
        allowFullScreen="true"
      ></iframe>
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
  data() {
    return {
      foods: ["火锅", "烧烤", "牛排"],
      games: ["超级玛丽", "拳皇", "合金弹头"],
      films: ["火柴人", "蜘蛛侠", "蝙蝠侠"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>