<template>
  <ul>
    <li @mousemove.prevent="handleMove" v-for="(item, index) in list" :key="`item_${index}`">
      <!--<span v-if="!render">{{item.name}}</span>-->
      <!--<render-dom v-else :render-func="render" :name="item.name"></render-dom>-->
      <!-- // 渲染组件添加 -->
      <!--<span v-if="!render">{{item.number}}</span>-->
      <!--<render-dom v-else :render-func="render" :number="item.number"></render-dom>-->
      <!-- slot插槽-->
      <slot :number="item.number"></slot> <!-- 作用域插槽 可以配合具名插槽使用如下所示： -->
      <slot name="aa" :number="item.number"></slot> <!-- 作用域插槽 可以配合具名插槽aa使用 -->
    </li>
  </ul>
</template>

<script>
import RenderDom from '_c/render-dom'
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleMove (event) {
      event.preventDefault() // 阻止鼠标滑过选择的一个默认行为
    }
  }
}
</script>

<style scoped>

</style>
