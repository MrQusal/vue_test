<template>
  <div class="person">
    <h1>人员列表</h1>
    <h4>Counter 组件中的求和为 {{ sum }}</h4>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonFromServer">添加一个人，名字从别的服务获取</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapActions, mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const p = { id: nanoid(), name: this.name };
      // 特殊写法：personAbout/ADD_PERSON、在 personAbout 对象的 mutations 中找 ADD_PERSON 方法
      this.$store.commit("personAbout/ADD_PERSON", p);
      this.name = "";
    },
    addWang() {
      const p = { id: nanoid(), name: this.name };
      // 特殊写法：personAbout/ADD_PERSON、在 personAbout 对象的 actions 中找 addPersonWang 方法
      // 关系：dispatch 去找 actions 对象、commit 去找 mutations 对象
      this.$store.dispatch("personAbout/addPersonWang", p);
      this.name = "";
    },
    addPersonFromServer() {
      this.$store.dispatch("personAbout/addPersonByServer");
    },
  },
  computed: {
    // ...mapState("personAbout", ["personList"]),
    personList() {
      return this.$store.state.personAbout.personList;
    },
    // ...mapState("counterAbout", ["sum"]),
    sum() {
      return this.$store.state.counterAbout.sum;
    },
    firstPersonName() {
      /*
        getters 中的封装和 state 中的封装不同（自己实现 计算属性）
          返回 state 中的数据：this.$store.state.具体的对象名.属性名
          返回 getters 中的数据：this.$store.getters["具体的对象名/属性名"];
      */

      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
.person {
  margin: 0 auto;
  width: 400px;
  height: 300px;
  border: 1px solid black;
}
</style>