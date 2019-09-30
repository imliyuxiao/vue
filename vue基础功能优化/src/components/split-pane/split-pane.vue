<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent, paddingLeft:`${this.triggerWidth / 2}px`}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{left:triggerLeft, width:`${triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent, paddingLeft:`${this.triggerWidth / 2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      value: 0.3,
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%` // ES6的模板写法，生成一个字符串，使用变量的地方使用{}
    },
    triggerLeft () {
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)` // calc() 函数用于动态计算长度值。
    }
  },
  methods: {
    handleClick () {
      this.value -= 0.02
    },
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left // event.srcElement：表示可以获取当前作用事件的对象
      // 初始偏移量 = 距离容器偏移量 - 当前点击条的偏移量
      this.canMove = true
    },
    handleMousemove (event) {
      // console.log(this.$refs.outer.getBoundingClientRect())
      // console.log(event.pageX - this.$refs.outer.getBoundingClientRect().left) // pageX：鼠标距离页面左侧的距离;getBoundingClientRect:返回一个对象，对象里是DOM的高宽左右顶底横纵属性
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      // offset = event.pageX  - outerRect.left 鼠标距离容器的距离 = 鼠标距离页面距离-容器距离页面距离
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 - outerRect.left) / outerRect.width
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      // this.value = offsetPercent // 偏移百分比 = 偏移量 / 总宽度 // 方法一
      // this.$emit('input', offsetPercent) // 方法二
      this.$emit('update:value', offsetPercent) // 方法三
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style lang="less">
.split-pane-wrapper{
  height: 100%;
  width: 100%;
  position: relative;
  .pane{
    position: absolute;
    top: 0;
    height: 100%;
    &-left{ // &是父级的样式名称
      /*width: 30%;*/
      background: palevioletred;
    }
    &-right{ // &是父级的样式名称
      right: 0;
      bottom: 0;
      /*left: 30%;*/
      background: paleturquoise;
    }
    &-trigger-con{
      width: 8px;
      height: 100%;
      background: red;
      position: absolute;
      top: 0;
      z-index: 10;
      cursor: col-resize;
    }
  }
}
</style>
