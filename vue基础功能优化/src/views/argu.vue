<template>
    <div>
      {{name}}
    </div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  },
  // 第一次进入argu页面时，没有打印任何内容，说明beforeRouteUpdate守卫没有被调用
  // 当路由不改变，路由参数改变时，argu组件被复用，beforeRouteUpdate守卫才被调用
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
    next()
  }
}
</script>

<style scoped>

</style>
