// 在mutations中只能做一些同步操作，异步操作需要在action当中使用
import vue from 'vue'
const mutations = {
  SET_APP_NAME (state, params) { // 此处params可以代表一个值也可以代表一个对象 //此处state所指的是同级的state对象，即state.js中的state
    state.appName = params // 值的方式
    // state.appName = params.appName // 对象的方式
  },
  SET_APP_VERSION (state) { // 此处与上面带对象的取值方式有所不同
    vue.set(state, 'appVersion', '2.0') // 当state中不存在appVersion的时候需要引入vue,利用vue.set('', '', '')来添加对象属性
    // state.appVersion = 'v3.0' //当state中有appVersion状态时这么使用
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  },
  SET_STATE_VALUE2 (state, value) {
    state.stateValue2 = value
  }
}

export default mutations
