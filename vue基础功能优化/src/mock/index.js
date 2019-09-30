import Mock from 'mockjs'
import { getUserInfo } from './response/user'
const Random = Mock.Random

// 接口模拟返回数据定义在这里
// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo) // 要拦截的URL，字符串
Mock.mock(/\/getUserInfo/, 'post', getUserInfo) // 要拦截的URL，正则表达式

Mock.setup({ // 配置Ajax请求的行为，暂时支持的配置项有timeout
  timeout: 500
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit) // this所指的是Random
  }
})
export default Mock
