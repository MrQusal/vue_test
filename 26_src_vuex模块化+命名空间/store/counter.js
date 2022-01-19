// counter组件 用到的一些配置
export default {
  // 使用 命名空间 配置，那么在 mapXXX 时，才能传递两个参数，指定 $store.counterAbout 或者 personAbout
  namespaced: true,
  actions: {
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
  },
  mutations: {
    INCREMENT(state, value) {
      state.sum += value;
    },
    DECREMENT(state, value) {
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    name: 'Tim',
    age: 18,
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    }
  }

}