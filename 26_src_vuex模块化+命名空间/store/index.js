// 导入 Vuex
import Vuex from "vuex";
import Vue from "vue";

// 这里导入 配置，其他的具体配置都在对应的 js 文件中
import counterOptions from './counter';
import personOptions from './person';


// 必须在创建 store 对象前，使用 Vuex 插件（重要，否则报错）
Vue.use(Vuex)
// 4. 创建 store 对象，并暴露
export default new Vuex.Store({
  // 使用 modules 配置多个对象，便于管理
  modules: {
    counterAbout: counterOptions,
    personAbout: personOptions
  }
})

