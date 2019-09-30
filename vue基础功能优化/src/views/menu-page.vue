<template>
  <div class="menu-box">
    <!--<a-menu>-->
      <!--<a-menu-item>111</a-menu-item>-->
      <!--<a-menu-item>222</a-menu-item>-->
      <!--<a-submenu>-->
        <!--<div slot="title">333</div>-->
        <!--<a-menu-item>333-1-1</a-menu-item>-->
        <!--<a-menu-item>333-1-2</a-menu-item>-->
        <!--<a-submenu>-->
          <!--<div slot="title">333-22</div>-->
          <!--<a-menu-item>333-2-1</a-menu-item>-->
          <!--<a-menu-item>333-2-2</a-menu-item>-->
        <!--</a-submenu>-->
      <!--</a-submenu>-->
    <!--</a-menu>-->
    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</a-menu-item>
        <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu'
const { AMenu, AMenuItem, ASubmenu } = menuComponents // 结构赋值的形式将三个组件注册在这里
export default {
  name: 'menu_page',
  components: {
    // ...menuComponents // 这是一个ES6的用法，...可以将其拆分开来
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '11'
        },
        {
          title: '22'
        },
        {
          title: '33',
          children: [
            {
              title: '33-1'
            },
            {
              title: '33-2',
              children: [
                {
                  title: '33-2-1'
                },
                {
                  title: '33-2-2'
                },
                {
                  title: '33-2-3',
                  children: [
                    {
                      title: '33-2-3-1'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.menu-box{
  width: 300px;
  height: 400px;
  text-align: left;
  .a-submenu-child-box{
    .a-menu-item{
      padding-left: 25px;
    }
    .a-submenu{
      .a-submenu-title{
        padding-left: 25px;
      }
      .a-submenu-child-box{
        .a-menu-item{
          padding-left: 45px;
        }
        .a-submenu{
          .a-submenu-title{
            padding-left: 45px;
          }
          .a-submenu-child-box{
            .a-menu-item{
              padding-left: 65px;
            }
          }
        }
      }
    }
  }
}
</style>
