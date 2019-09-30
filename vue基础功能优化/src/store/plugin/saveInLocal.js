// export const saveInLocal = store => { // vuex接收store作为唯一参数
//   console.log('当store初始化调用')
//   store.subscribe((mutations, state) => { // 读取当前调用的mutation信息，state是当前模块的状态信息
//     console.log('每次mutation之后调用') // mutation 的格式为 { type, payload }
//   })
// }
//
// export default saveInLocal

export default store => { // vuex接收store作为唯一参数
  console.log('当store初始化调用')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state)) // 如果存在的话，使用replaceState方法-把loacalStorage.state字符串转换成对象 替换掉实例中的store
  store.subscribe((mutations, state) => { // 每次提交mutation时读取当前调用的mutation信息，state是当前模块的状态信息
    // console.log('每次mutation之后调用') // mutation 的格式为 { type, payload }
    localStorage.state = JSON.stringify(state) // 此处state是一个对象，这里要将state转化为JSON字符串的形式存储在loacalStorage.state里面，方式为JSON.stringify(state)
  })
}
