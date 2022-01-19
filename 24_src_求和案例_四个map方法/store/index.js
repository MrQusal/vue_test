// 导入 Vuex
import Vuex from "vuex";
import Vue from "vue";

// 创建 store 对象
// 1. 创建 actions 对象——用于响应组件中的动作（主要做业务逻辑，类似于 service 层)
const actions = {
  increment(context, value) {
    // 在 actions 中，可以 ajax 请求来获取数据
    // console.log('actions');
    // 这里的 context 可以看成一个迷你版的 store，里面有最需要的 commit 方法
    console.log(context);
    // console.log(value);
    context.commit("INCREMENT", value)
  },
  decrement(context, value) {
    context.commit('DECREMENT', value);
  },
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("INCREMENT", value);
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit("INCREMENT", value)
    }, 500);
  }
};
// 2. 创建 mutations 对象——用于操作数据（操作数据，类似于 dao 层）
const mutations = {
  // 一般而言，在 mutations 中的函数是大写
  INCREMENT(state, value) {
    state.sum += value;
  },
  DECREMENT(state, value) {
    state.sum -= value;
  },
};
// 2. 创建 state 对象——用于存储数据
const state = {
  // 初始sum为 0
  sum: 0,
  name: 'Tim',
  age: 18
};

// 可以配置 getters 
const getters = {
  // 可以接收到参数，state 对象，state 和 getters 的关系就类似于 data 和 computed 的关系
  bigSum(state) {
    return state.sum * 10;
  }
}

// 必须在创建 store 对象前，使用 Vuex 插件（重要，否则报错）
Vue.use(Vuex)
// 4. 创建 store 对象，并暴露
export default new Vuex.Store({
  // key value 同名，可以用简写形式
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters
})

