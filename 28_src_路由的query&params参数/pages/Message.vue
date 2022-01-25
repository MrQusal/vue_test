<template>
  <div>
    <ul>
      <li v-for="item in messageList" :key="item.id">
        <!-- 
          路由传参
            query 参数
              to 的字符串写法：v-bind 绑定，再使用 `` 模板字符串进行拼串
                :to="`/home/message/detail?id=${item.id}&title=${item.title}`"

              to 的对象写法：
                :to="{
                  path: '/home/message/detail',
                  query: {
                    id: item.id,
                    title: item.title,
                  },
                }"
           -->
        <!-- <router-link
          :to="`/home/message/detail?id=${item.id}&title=${item.title}`"
          >{{ item.title }}</router-link
        > -->

        <!-- 
          路由传参
            params 参数（需要在路由配置路径时加上占位符  path: 'detail/:id/:title'）
              to 的字符串写法：v-bind 绑定，再使用 `` 模板字符串进行拼串
                :to="`/home/message/detail/${item.id}/${item.title}`"

              to 的对象写法：（使用 params 时，to的对象写法中，只能使用 name 属性跳转）
                :to="{
                  name: 'detail'
                  params: {
                    id: item.id,
                    title: item.title,
                  },
                }"
           -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>

<style>
</style>