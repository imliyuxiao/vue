<template>
  <div class="email">
    email：<button @click="handleClick">email按钮</button>
  </div>
</template>

<script>
export default {
  name: 'email',
  methods: {
    handleClick () { // 将事件提交给bus实例，用到了 this.$bus.$emit('事件名'，'提交的内容')
      // $emit触发当前实例上的事件
      this.$bus.$emit('on-click', 'hello')
    }
  },
  mounted () { // 生命周期里查看注册上的BUS,创建的是一个空的vue实例作为交互的中介
    console.log(this.$bus)
  }
}
</script>

<style scoped>
.email{
  border: 1px solid #000;
}
</style>
