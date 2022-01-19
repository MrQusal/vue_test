<template>
  <div class="person">
    <h1>人员列表</h1>
    <h4>Counter 组件中的求和为 {{ sum }}</h4>
    <input type="text" placeholder="请输入姓名" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
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
      this.$store.commit("ADD_PERSON", p);
      this.name = "";
    },
  },
  computed: {
    ...mapState(["personList", 'sum']),
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