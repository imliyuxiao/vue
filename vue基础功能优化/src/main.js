import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // 引入store
import Bus from './lib/bus'
import CountTo from '_c/count-to'
import Mock from './mock'
// if (process.env.NODE_ENV === 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus // 在原型对象上注册BUS

const handleClick = event => {
  console.log(event)
  event.stopPropagation() // 在方法里实现阻止事件冒泡
}

let list = [{ name: 'lison' }, { name: 'lili' }]
const getLiEleArr = (h) => {
  return list.map((item, index) => h('li', {
    on: {
      'click': handleClick
    },
    key: `list_item_${index}`
  }, item.name))
}

new Vue({
  router,
  store, // 引入后将store挂载到Vue根实例上
  render: h => h(App) // render函数，h 是参数，当有多个参数时，需要使用: render: (h)=> g(App)
  // 这里h()内可传入App等引入的组件；也可以传入标签,以及标签属性, 内容等，如下：
  //
  // 表示一：
  // render: h => {
  //   return h(CountTo, {
  //     'class': ['count-to', true ? 'aa' : 'bb'], // 这里class是保留字，要用引号， aa bb是类名方法一：数组的方式
  //     // 'class': { 'count-to': 1 === 1 }, // 对象的方式
  //     props: { // props传入属性值
  //       endVal: 100
  //     },
  //     // domProps: {
  //     //   innerHTML: '124'
  //     // },
  //     on: { // 用on来绑定事件
  //       'on-animation-end': () => { // 这里在组件内有一个on-animation-end事件，这里来绑定这个事件
  //         console.log('animation end!')
  //       }
  //     },
  //     nativeOn: { // 这里我们在组件上绑定一个点击事件，但是我们不在组件内绑定，这里我们就用到了nativeOn这样一个函数
  //       'click': () => {
  //         console.log('click')
  //       }
  //     },
  //     directives: [], // 指令
  //     scopedSlots: {},
  //     slot: '',
  //     key: '',
  //     ref: '' // 通过ref可以获取dom或者一个实例
  //     // attrs: {
  //     //   id: 'box'
  //     // },
  //     // style: {
  //     //   color: 'pink'
  //     // }
  //   }) // 这里如果添加内容是多个元素的话这里是一个数组 []
  // }
  //
  //
  // 表示二：
  // render: h => h('div', '123')
  // 表示三：
  // render: h => h('div', [
  //   h('span', '111'),
  //   h('span', '222')
  // ])
  //
  // 表示四 render出列表
  // render: h => h('div', [
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h)) // 在render中无法使用v-for, 所以我们需要提出来方法循环遍历出li
  // ])
}).$mount('#app')
