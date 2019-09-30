import axios from 'axios'
import { baseURL } from '@/config'

// 创建类：：
class HttpRequest { // es6的方法创建一个类
  constructor (baseUrl = baseURL) { // 定义一个方法constructor,用来接收一些参数，在创建实例的时候可以在（）里面添加参数baseUrl是基础路径 // 这里baseURL被拆去config中去了，这里引入使用就可以了
    this.baseUrl = baseUrl // 这里的this指的是这里要创建的实例
    this.queue = {} // 队列，通过队列把所有的请求放在栈里面
  }
  getInsideConfig () { // 在这里相当于完成了类的创建
    const config = { // 在全局中可设置的内容可以在这里添加
      baseUrl: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  // 添加请求响应拦截器：：
  interceptors (instance, url) { // 添加interceptors方法，创建一个instance实例
    instance.interceptors.request.use(config => { // 请求拦截器
      // 添加请求前的控制，比如：添加全局的loading......
      // Spin组件能够在整个浏览器中显示一个全局loading，会显示一个遮罩层
      // Spin.show()
      if (!Object.keys(this.queue).length) { // 获取队列里面的所有属性名，如果没有请求，用Spin.show来添加一个loading
        // Spin.show() // 安装Spin后可使用
      }
      this.queue[url] = true
      // console.log('请求拦截：', config)
      return config // 把config返回出去
    }, error => {
      return Promise.reject(error) // 返回错误信息
    })
    instance.interceptors.response.use(res => { // 响应拦截器
      delete this.queue[url] // 删除队列
      // console.log('axios中响应拦截结果：', res)
      return res
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request (options) { // 我们使用request来请求
    const instance = axios.create() // 调用axios的create方法创建一个实例，是一个函数
    options = Object.assign(this.getInsideConfig(), options) // 使用es6的assign方法对options和getInsideConfig做一个合并;如果有相同的属性名的值，后边这个options会覆盖前面的值
    this.interceptors(instance, options.url) // 调用拦截器
    return instance(options)
  }
}

export default HttpRequest // 导出类
