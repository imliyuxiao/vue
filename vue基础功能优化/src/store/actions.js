import { getAppName } from '@/api/app'

const actions = {
  // updateAppName (paramsObj) { // 方法一：相同与如下方法二中的{commit}写法
  //   const commit = paramsObj.commit
  // }
  // updateAppName ({ commit }) { // 方法二：模仿异步操作-回调方式；调用commit（参数也是一个对象），提交一个mutations
  // getAppName().then(res => {
  //   // console.log(res)
  //   // commit('SET_APP_NAME', res.info.appName) // 方法一
  //   const { code, info: { appName } } = res // 方法二 es6的结构赋值
  //   commit('SET_APP_NAME', appName)
  // }).catch(err => {
  //   console.log(err)
  //  })
  // }
  // 使用es8的async来异步操作
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName() // 可以是用await等待异步执行，执行完成后再继续往下走，相当于把一个异步执行变成一个同步执行
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
