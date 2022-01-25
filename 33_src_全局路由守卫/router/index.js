// 该文件准们用于创建整个应用的路由器
import VueRouter from 'vue-router';
// 引入组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import News from '../pages/News.vue';
import Detail from '../pages/Detail.vue';

// 创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    // 一级路由需要加 /
    {
      name: 'about',
      path: '/about',
      component: About,
      meta: { title: '关于' }
    },
    {
      name: "home",
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        // children 配置子路由，path 路径无需加 /
        {
          name: 'news',
          path: 'news',
          component: News,
          meta: { isAuth: true, title: '新闻' }  // meta 配置项(路由元信息) 程序员自己定义
        },
        {
          name: 'message',
          path: 'message',
          component: Message,
          meta: { isAuth: true, title: '消息' },
          children: [
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
              meta: { title: '详情' },
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


/*
  全局前置路由守卫 --- 初始化, 每次路由切换以前都会被调用
  传入函数,接收三个参数,以此为: to form next
    to 要去的 $route 相关信息
    from 从哪里来的 $route 相关信息
    next 函数, 用于是否放行
*/

router.beforeEach((to, from, next) => {
  /*
    1. 需求: 要想查看 news 或者 message 组件, 必须要有权限(此处为模拟, 将权限放在 localStorage 中)
    2. 如果为路由配置了 name 属性, 那么此处可以使用 to.name === 'news' 来判断
    3. 使用 to.path 或者 to.name 属性还是太麻烦. 想使用一个标识, 来表明哪些路由需要授权
      3.1 在配置路由时, 添加 meta 配置项, 在其中自定义属性 isAuth
      3.2 在前置路由中, 使用 meta.isAuth 来判断是否需要授权
  */
  if (to.meta.isAuth) {
    if (localStorage.getItem('user') === 'admin') {
      next()
    } else {
      alert(`当前用户为${localStorage.getItem('user')}, 非 admin , 没有权限查看`)
    }
  } else {
    next()
  }
})

/*
  后置路由守卫
  只有两个参数 to, from
  1. 需求: 页面跳转之后, 页签的 title 也跟着变化
*/
router.afterEach((to, from) => {
  console.log('afterEach');
  document.title = to.meta.title;
})

export default router
