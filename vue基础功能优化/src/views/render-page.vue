<template>
    <div>
      <!--<ul @click="handleClick">-->
        <!--&lt;!&ndash;  @click.stop这里通过stop来阻止事件冒泡  &ndash;&gt;-->
        <!--<li @click.stop="handleClick" v-for="(item, index) in list" :key="`list_item_${index}`">{{ item.name }}</li>-->
      <!--</ul>-->
      <!--<list :list="list" :render="rednderFunc"></list>-->
      <!-- JSX写法 -->
      <!--<list :list="list" :style="{color: 'red'}" :render="renderFunc"></list>-->
      <!--作用域slot插槽的使用-->
      <list :list="list" :style="{color: 'red'}">
        <count-to slot-scope="count" :end-val="count.number"></count-to>
      </list>
    </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to' // 渲染组件添加
export default {
  data () {
    return {
      // list: [
      //   { name: 'lison' },
      //   { name: 'lili' }
      // ]
      list: [
        { number: 100 },
        { number: 45 }
      ]
    }
  },
  components: {
    List,
    CountTo // 此处用于插槽
  },
  methods: {
    // handleClick (event) {
    //   console.log(event)
    // },
    //
    // render方法1
    // rednderFunc (h, name) {
    //   return h('i', {
    //     style: {
    //       color: 'pink'
    //     }
    //   }, name)
    // }
    //
    // 下面是JSX方法2
    renderFunc (h, number) {
      return (
        // <i on-click={this.handleClick} style = {{ color: 'pink ' }}>{name}</i>
        // ****渲染组件****绑定一个原生click事件nativeOn-click
        <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style = {{ color: 'pink ' }}></CountTo>
      )
    },
    handleClick (event) {
      console.log(event)
    },
    handleEnd () {
      console.log('end!')
    }
  }
}
</script>

<style scoped>

</style>
