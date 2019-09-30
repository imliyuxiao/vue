<template>
  <div class="home">{{food}}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
    <button @click="getInfo" :style="{ background: bgColor }">请求数据(MOCK)</button>
    <br/>
    <!--<img :src="url">-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios' // 对axios封装后就不在这里直接引用了
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      url: '',
      bgColor: ''
    }
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 执行时页面还未渲染
    next(vm => { // vm是组件的实例
      // console.log(vm)
      // console.log('组件路由钩子：beforeRouteEnter')
      // console.log(to.name)
      // console.log(from.name)
    })
  },
  beforeRouteLeave (to, form, next) {
    // 路由即将离开的时候调用此钩子方法
    // const leave = confirm('您确定要离开么？')
    // if (leave) next()
    // else next(false)
    next()
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      // else if (type === 'push') this.$router.push('/parent')
      else if (type === 'push') {
        const name = 'lison'
        this.$router.push({
          // path: `/argu/${name}`
          name: 'parent',
          // query: {
          //   name: 'lison'
          // }
        // name: 'argu',
        // params: {
        //   name: 'aa'
        // }
        })
      } else if (type === 'replace') {
        this.$router.replace({
          name: 'parent'
        })
      }
    },
    getInfo () {
      getUserInfo({ userId: 21 }).then(res => { // userId是传入的参数
        console.log('home中返回的结果:', res)
        this.url = res.data.img
        this.bgColor = res.data.color
      })
      // axios.post('http://localhost:3000/getUserInfo', { userId: 21 }).then(res => { // axios没有封装可这么使用
      //   console.log(res)
      // })
    }
    //
  }
}
</script>
