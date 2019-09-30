// 组件的根状态管理
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex) // vuex作为vue插件，需要使用Vue.use()方法把vuex加载进来

// 导出Vuex.Store实例
export default new Vuex.Store({ // 加载vuex后,需要使用Vuex.Store创建实例(state,getters,mutations,action以及modules作为参数)
  // strict: process.env.NODE_ENV !== 'development', // 严格模式：判断是否是开发环境，开发环境开启严格模式
  state,
  getters,
  mutations,
  actions,
  modules: { // 独立模块管理
    user
  },
  plugins: [saveInLocal] // 通过plugin给vuex加载插件函数，
})
