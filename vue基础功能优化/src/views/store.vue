<template>
  <div>
    <a-input @inputFun="handleInput"/>
    <a-show :content = 'inputValue'/>
    <p>{{inputValue}} -> {{inputValueLastLetter}} </p>
    <!---->
    <a-input v-model='stateValue2'  @inputFun="handleInputValueChange2"/>  <!--v-modal是在mutation之外直接修改对象的值；这样在严格模式下就会报错，所以我们需要把v-modal修改成vuex的state-->
    <p>{{stateValue2}}-||||stateValue2</p>
    <!---->
    <a-input :value="stateValue" @inputFun="handleInputValueChange" :placeholderValue="placeholderValue"/>
    <p>{{stateValue}}-||||stateValue</p>
    <p>appName: {{appName}}; -> appNameWithVersion: {{appNameWithVersion}}</p>
    <!--<a-show :content="inputValue"/>-->
    <!--<p><b>this.$store.state.appName:::</b>{{this.$store.state.appName}}</p>-->
    <p>userName: {{userName}}-> firstLetter: {{firstLetter}}</p>
    <!--<p><b>this.$store.state.user.userName:::</b>{{this.$store.state.user.userName}}</p>-->
    <button @click="handleChangeAppName">修改appName{{ appVersion }}</button>
    <button @click="handleChangeUserName">修改uerName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
    <!---->
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// import { mapState, mapGetters } from 'vuex'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import state from "../store/state"; // mapState, mapGetters是ES6的结构赋值
// import { createNamespacedHelpers } from 'vuex'
// const { mapGetters } = createNamespacedHelpers('user')
export default {
  name: 'store',
  data () {
    return {
      inputValue: '',
      placeholderValue: '方法1：使用vuex,mutation',
      placeholderValue2: '方法2：使用get set'
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // 方法一
    // appName () {
    //   return this.$store.state.appName // $store是挂载在Vue实例上的main.js中可见
    // },
    // userName () {
    //   return this.$store.state.user.userName // $store是挂载在Vue实例上的main.js中可见
    // },
    // userName () { // 模块module-user中取值
    //   return this.$store.state.user.userName
    // }
    // 方法二 =====mapState 数组方式=====
    // 此处...是ES6中的展开操作符（另外一种是剩余操作符）
    // ...展开操作符会展开一个对象，mapState会返回一个对象（如：方法一）
    // ...mapState([
    //   'appName'
    // ])
    // ...mapState('user', [ // 开启命名空间namespaced用'user,[]'这样的写法
    //   'userName'
    // ]),
    // 方法三 =====mapState 数组方式=====
    // 在模块中不开启命名空间namespaced,模板中的userName可以和根目录中的appName一起使用
    // ...mapState([
    //   'appName',
    //   'userName'
    // ]),
    // 方法四 =====mapState对象方式=====
    // 在模块中开启或者不开启命名空间namespaced，如下写法都可以
    ...mapState({
      appName: state => state.appName, // state跟级别状态里；此处会传入一个属性值是一个回调函数，参数是state，代表根状态下的state实例对象
      userName: state => state.user.userName, // 此处userName是写在user模块中写的
      appVersion: state => state.appVersion,
      // todoList: state => state.todo ?  state.todo.todoList : ''
      todoList: state => state.user.todo ? state.user.todo.todoList : [], // 在模块中添加模块的方式获取todoList
      stateValue: state => state.stateValue,
      stateValue2: state => state.stateValue2,
    }),
    stateValue2: {
      get () {
        console.log('a')
        return this.$store.state.stateValue2
      },
      set (value) {
        console.log('s')
        this.$store.commit('SET_STATE_VALUE2', value)
        // this.SET_STATE_VALUE2(value)
      }
    },
    // 使用getters计算属性
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },

    //
    // =====getters的使用=====
    //
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    firstLetter () {
      // return this.userName.substr(0, 1) //在当前页面中获取的userName获取
      return this.$store.getters.firstLetter // 通过组件的方式获取;跟state不同的是这里可以不用写getters.user.firstLetter
    },
    //
    //
    // =======mapGetters数组的方式,<mapGetters没有对象的方式>=====
    // ...mapGetters([ // 不开启命名空间namespaced不用'user,[]'这样的写法
    //   'appNameWithVersion', // 根目录getters中读取
    //   'firstLetter' // 模板中的getters读取
    // ]),
    //
    // ...mapGetters('user', [ // 开启命名空间namespaced用'user,[]'这样的写法
    //   'firstLetter'
    // ]),
    //
    //
    // =====================================================================================
    // =====以下是通过设置setter改变appName的状态值（这是个形象打比方出来的<不可使用>）=====
    // =====================================================================================
    // 计算属性相当于默认情况下只有一个get方法，在设置这个值的时候会调用set方法
    // appName: { // 此处是一个对象，而不是方法来改变状态值
    // set: function (newValue) {
    //   this.inputValue = newValue + '设置值'
    // },
    // get: function () {
    //   return this.inputValue + '返回值'
    // }
    // }
  },
  methods: {
    ...mapMutations([ // 一：vuex会把根级别和模块中的对象全部注册到全局当中，因此可以直接拿来用
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE',
      'SET_STATE_VALUE2'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    // ...mapMutations('user', [ // 二：这里可以通过开启命名空间给模块设置一个密闭的环境
    //   'SET_USER_NAME',
    //   'SET_APP_NAME'
    // ]),
    handleInput (val) {
      this.inputValue = val
    },
    handleChangeAppName () {
      // this.appName = 'appname' // 不可以使用赋值的方式来修改$store实例的状态值
      // =======方式一：赋值是一个值的时候============
      // this.$store.commit('SET_APP_NAME', 'newAppName') // 需要用$store实例通过commit来修改状态值
      // =======方式二.一：对象且有多个参数的时候==========
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'newAppName'
      // })
      // =========方式二.二：对象的写法一个参数=
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // this.SET_APP_NAME('newAppName') //用值得方式（对应mutations中用值的方式）
      // this.SET_APP_NAME({ // 用对象的方式去通过mutations去改变appName的值（对应mutations中用对象的方式）
      //   appName: 'newAppName' // **当这个值是通过接口获取，ajax属于异步操作，所以只能去actions操作异步请求获取这个值**
      // })
      // this.updateAppName()
      this.$store.dispatch('updateAppName', '') // 使用实例上的一个dispatch的方法来触发actions,需要配合mapActions一起使用
      this.$store.commit('SET_APP_VERSION') // 在mutations中给出了对象值由commit直接引入对象
    },
    handleChangeUserName () {
      // this.$store.state.user.userName = 'haha' // 不能在mutation之外直接赋值给对象，在严格模式下是会报错的
      this.SET_USER_NAME('NewUserName')
    },
    registerModule () {
      // this.$store.registerModule('todo', {
      //   state: {
      //     todoList: [
      //       '学习list1',
      //       '学习list2'
      //     ]
      //   }
      // })
      this.$store.registerModule(['user', 'todo'], { // 在模块中添加模块的方式
        state: {
          todoList: [
            '学习list1',
            '学习list2'
          ]
        }
      })
    },
    handleInputValueChange (value) {
      this.SET_STATE_VALUE(value)
    },
    handleInputValueChange2 (value) {
      this.SET_STATE_VALUE2(value)
    },
  }
}
</script>

<style scoped>

</style>
