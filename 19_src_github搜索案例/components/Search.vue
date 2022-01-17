<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;<button @click="getUserList">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUserList() {
      // 方式一。使用字符串拼接
      // axios.get("https://api.github.com/search/users?q=" + this.keyWord);
      // 方式二。使用模板字符串

      // 请求回来前
      this.$bus.$emit("getUserList", {
        userList: [],
        isLoading: true,
        errMsg: "",
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (res) => {
          console.log("请求成功", res.data.items);
          // 将数据通过事件总线发送出去
          // 请求成功
          this.$bus.$emit("getUserList", {
            userList: res.data.items,
            isLoading: false,
            errMsg: "",
          });
        },
        (error) => {
          console.log("请求失败", error.message);
          // 请求失败
          this.$bus.$emit("getUserList", {
            userList: [],
            isLoading: false,
            errMsg: error.message,
          });
        }
      );
      this.keyWord = "";
    },
  },
};
</script>

<style>
</style>