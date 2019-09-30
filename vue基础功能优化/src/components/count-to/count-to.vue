<template>
  <div>
   <slot name="left"></slot> <span ref="number" :class="countClass" :id="eleId"></span> <!-- 绑定计算属性--><slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
import './count-to.css'
export default {
  name: 'CountTo',
  computed: { // 计算属性
    eleId () {
      return `count_up_${this._uid}` // 每一个组件的uid都是不一样的，这里保证每一个组件ID都不相同
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: {} // 空对象
    }
  },
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true // 必填
    },
    /**
     * @description 动画延迟
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长 1s
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用分组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数分割符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    },
    emitEndEvent () { // 因为两处用到事件所以将此事件单独提到一个方法里面
      setTimeout(() => {
        this.$nextTick(() => { // this.$nextTick(()=>{})将回调延迟到下次DOM更新循环之后执行。在修改数据之后立即使用它，然后等待DOM更新。
          this.$emit('on-animation-end', Number(this.getCount())) // 使用$emit把值由子传父触发事件 ，后边是传入的值
        })
      }, this.duration * 1000) // 这里duration是毫秒，所以需要乘以1000变成秒，这里是在运行完成后执行‘on-animation-end’事件
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.counter.update(newVal) // 调用update的时候动画开始
      this.emitEndEvent() // 1.动画结束后调用事件
    }
  },
  mounted () { // 生命周期：注意mounted不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用vm.$nextTick替换掉mounted
    this.$nextTick(() => { // mounted该钩子在服务器端渲染期间不被调用
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, { // 创建实例new CountUp
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent() // 2.初始调用事件
      }, this.delay)
    })
  }
}
</script>

<style scoped>

</style>
