<template>
  <ul class="a-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'AMenu'
}
</script>

<style lang="less">
.a-menu{
  & *{
    list-style: none;
  }
  ul{
    padding: 0;
  }
}
</style>
