<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-for="user in info.userList" :key="user.id">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      // 多个相关的数据最好封装为对象
      info: {
        userList: [],
        // 是否加载中
        isLoading: false,
        // 初次进入页面
        isFirst: true,
        // 错误信息
        errMsg: "",
      },
    };
  },
  methods: {
    getUserList(dataObj) {
      console.log("收到了数据", dataObj);
      // info 对象 和 dataObj 对象展开（并集），键值重复取后者
      this.info = { ...this.info, ...dataObj };
    },
  },

  mounted() {
    this.$bus.$on("getUserList", this.getUserList);
  },

  beforeDestroy() {
    this.$bus.$off("getUserList");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>