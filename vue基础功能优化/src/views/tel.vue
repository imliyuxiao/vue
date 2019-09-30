<template>
    <div class="tel">
      <p>tel：{{ message}}</p>
    </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      message: ''
    }
  },
  mounted () { // 在mounted生命周期中给bus实例添加一个事件监听on，此处有一个参数msg，写法如下
    // $on 是给当前实例上绑定一个监听事件。此处是给bus实例监听一个'on-click'的点击事件
    this.$bus.$on('on-click', msg => {
      this.message = msg
    })
  }
}
</script>

<style scoped>
.tel{
  border: 1px solid #f00;
}
</style>
