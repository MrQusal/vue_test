// 该文件准们用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import News from '../pages/News.vue';
import Detail from '../pages/Detail.vue';

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    // 一级路由需要加 /
    { path: '/about', component: About },
    {
      path: '/home', component: Home, children: [
        // children 配置子路由，path 路径无需加 /
        { path: 'news', component: News },
        {
          path: 'message', component: Message, children: [
            /*  
              配置 name 属性，方便路由（多级）的跳转
                :to="{
                  path: '/about/message/detail'
                }"
                就可以写成
                :to="{
                  name: 'detail'
                }"
            */
            {
              name: 'detail',
              path: 'detail/:id/:title',
              component: Detail,
              // 第一种写法，对象写法，传入的参数可以用 props 接收
              /* props: {
                a: 1,
                b: 10
              } */
              // 第二种写法，值为布尔值，为真代表路由收到的 params 参数，以 props 的形式传给 detail组件
              // props: true
              // 第三中写法，值为函数（可以接收 $route 参数）{ params } 表示从 $route 中解构赋值出 params 对象
              props({ params }) {
                return { id: params.id, title: params.title }
              }
            }
          ]
        }
      ]
    },
  ]
})
