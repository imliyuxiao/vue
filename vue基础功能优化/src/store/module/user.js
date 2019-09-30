// user模块管理 定义state
const state = {
  userName: 'Lison[模块中]'
}
const getters = { // 在user.js模块中定义这个getters
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = { // 模块中定义mutations
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  updateUserName ({ commit, state, rootstate, dispatch }) { // state为当先模板上的state, rootstate指的是根目录下的state
    // rootstate.appName //获取rootstate下的appNmae方式
    dispatch('xxx', '') // 通过dispatch触发 xxx()的actions方法
  },
  xxx () {
    //
  }
}

export default {
  // namespaced: true, // 为true则使用命名空间
  state,
  getters,
  mutations,
  actions,
  modules: { // 因为module，user是一个单独的模块，所以再这个模块中还是可以有模块
    //
  }
}
