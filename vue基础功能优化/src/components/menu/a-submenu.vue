<!--定义收缩菜单部分-->
<template>
    <ul class="a-submenu">
      <li class="a-submenu-title" @click="handleClick()">
        <slot name="title"></slot>
        <span class="shrink-icon" :style="{ transform: `rotateZ(${ showChild ? 0 : 180}deg)`} ">^</span>
      </li> <!-- 具名插槽 -->
      <li v-show="showChild" class="a-submenu-child-box">
        <slot></slot>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="less">
.a-submenu{
  &-title{
    background: #42b983;
    color: #fff;
    position: relative;
    padding-left: 10px;
    .shrink-icon{
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  &-child-box{
    overflow: hidden;
  }
}
</style>
