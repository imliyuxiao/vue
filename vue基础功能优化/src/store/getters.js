// 根级别的getters
// 相当于组件中的计算属性 计算属性根据值进行计算处理得出新的值;使用该值的计算也会有相应的变化
const getters = {
  appNameWithVersion: (state) => { // 定义一个值appNameWithVersion是依赖于state（同级的state.js）中的appName来计算的;
    // return state.appName + 'v2.0' // 方法一
    return `${state.appName} v2.0` // 方法二：使用ES6 模板语法
  }
}
export default getters
