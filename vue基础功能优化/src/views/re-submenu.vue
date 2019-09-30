<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{item.title}}</a-menu-item>
      <re-submenu v-else :key="`menu_item_${index}_${i}`" :parent="item"></re-submenu> <!--调用当前组件，自身调用自己会循坏，需要设置终止行为-->
    </template>
  </a-submenu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubmenu } = menuComponents // 结构赋值的形式将三个组件注册在这里
export default {
  name: 'ReSubmenu',
  components: {
    AMenuItem,
    ASubmenu
  },
  props: {
    parent: {
      type: Object, // Object 类型需要提供一个返回函数
      default: () => ({})
    },
    index: Number
  }
}
</script>

<style scoped>

</style>
