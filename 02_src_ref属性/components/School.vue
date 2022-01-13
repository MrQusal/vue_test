<template>
  <div class="school">
    <h2>学校的名称: {{ name }}</h2>
    <h2>学校的地址: {{ adress }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      adress: "上海",
    };
  },
};
</script>

<style>
.school {
  background-color: #bfa;
}
</style>