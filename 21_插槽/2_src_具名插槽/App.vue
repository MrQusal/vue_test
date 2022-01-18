<template>
  <div class="container">
    <!-- 
      在这里使用双标签，然后在标签内直接写结构
      在子组件中用 slot 标签接收即可
     -->
    <Category cat="美食">
      <!-- 使用 slot 属性指定要放在哪个插槽 -->
      <img
        slot="center"
        src="http://www.06ps.com/d/file/2017/0720/1500537640721.jpg"
        width="100%"
        alt="美食"
      />
      <a slot="footer" href="http://www.baidu.com">更多美食</a>
    </Category>

    <Category cat="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>

    <Category cat="电影">
      <iframe
        slot="center"
        style="width: 100%"
        frameborder="0"
        src="https://v.qq.com/txp/iframe/player.html?vid=x0033pef1cg"
        allowFullScreen="true"
      ></iframe>
      <!-- 
        template 可以不影响页面的结构
          如果使用 template，那么 slot="footer" 可以改写为 v-slot:footer
       -->
      <template slot="footer">
        <div slot="footer" class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="javascript:;">推荐</a>
        </div>
        <h4>欢迎去影院观看</h4>
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
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>