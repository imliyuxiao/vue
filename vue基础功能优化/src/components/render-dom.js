// 函数式组件 只传入数据，不做相应操作，
export default {
  functional: true, // 无状态
  // props: {
  //   name: String,
  //   renderFunc: Function
  // },
  // render: (h, ctx) => { // 函数式组件没有实例，所以ctx指代当前的对象
  //   return ctx.props.renderFunc(h, ctx.props.name) // 获取props属性
  // }
  //
  // ****渲染组件所用****
  props: {
    number: Number,
    renderFunc: Function
  },
  render: (h, ctx) => { // 函数式组件没有实例，所以ctx指代当前的对象
    return ctx.props.renderFunc(h, ctx.props.number) // 获取props属性
  }
}
