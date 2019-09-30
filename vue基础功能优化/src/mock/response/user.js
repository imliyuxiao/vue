// export const getUserInfo = (options) => {
//   return {
//     name: 'lison',
//     year: '3'
//   }
// }
import Mock from 'mockjs'
const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    // 1.属性值是字符串
    'str|2-4': 'Lison', // 'name|min-max':string 通过重复string生成一个字符串，重复次数大于等于min,小于等于max
    'name|5': 'Lison', // 'name|count':string 通过重复string生成一个字符串，重复次数等于count
    // 2.属性值是数字
    'age|+2': 18, // 'name|+1':number 属性值自动加1，初始值为number
    'num|4-10': 0, // 'name|min-max':number 生成一个大于等于min、小于等于max的整数，属性值number只是用来确定类型
    'float|3-10.2-5': 0, // 生成一个浮点数，整数部分大于等于min,小于等于max，小数部分保留dmin到dmax位
    // 3.属性值是布尔值
    'bool|1': true, //  'name|1':boolean 随机生成一个布尔值，值为true的概率是1/2，值为false的概率同样是1/2
    'bool2|1-9': true, // 'name|min-max':value 随机生成一个布尔值，值为value的概率是min/(min + max),值为!value的概率是max/(min+max)
    // 4.属性值是对象
    'obj|2': { // 'name|count':obj 从属性值object中随机选取count个属性
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'abj2|1-2': { // 'name|min-max':obj 从属性值object中随机选取min到max个属性
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    // 5.属性值是数组
    // 'name|1':array 从属性值array中随机选取1个元素，作为最终值
    // 'name|+1':array 从属性值array中顺序选取1个元素，作为最终值
    'arr|2-4': [ 1, 2, 3 ], // 'name|min-max': array 通过重复属性值array生成一个新数组，重复次数大于等于min，小于等于max
    'arr2|2': [ 'a', 'b' ], // 'name|count': array 通过重复属性值array生成一个新数组，重复次数为count
    // 6.属性值是函数
    'func': () => { // 'name':function 执行函数function取其返回值作为最终的属性值，函数的上下文为属性'name'所在的对象
      return 'this is created by funcion'
    },
    // 7.属性值是正则表达式
    'reg': /[1-9][a-z]/, // 'name':regexp 根据正则表达式regexp反向生成可以匹配它的字符串。用于生成自定义格式的字符串
    //
    email: Random.email(),
    email2: Mock.mock('@email'),
    email3: Mock.mock({ email: 'sd.sdf@oksd.com' }),
    range: Random.range(3, 10, 3),
    data: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm'),
    datetime: Random.datetime('yyyy-MM-dd hh:mm'),
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'), // 这里时间是hour,所以分钟之后都是0
    img: Random.image('100x200', '#000000', '#ffffff', 'png', 'Lison'), // Random.image( size, background, foreground, format, text )
    img_base64: Random.dataImage(),
    color: Random.color(),
    // Random.url( protocol?, host?) 协议，域名
    // Random.protocol() 协议
    // Random.domain() 域名
    // Random.tld() 顶级域名
    // Random.email(domain?)
    // Random.ip()
    // ****Adress ******//
    // Random.region()
    // Random.province()
    // Random.city( prefix? )
    // Random.country( prefix? )
    // Random.zip()
    // ****Helper ******//
    // Random.capitalize( word )
    // Random.upper( str )
    // Random.lower( str )
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    // ****Miscellaneous ******//
    guid: Random.guid(),
    id: Random.id(),
    fruit: Random.fruit(),
    fruit2: '@fruit' // 利用占位符得到
  }
  // 以下是针对age做的数组实例
  // let i = 3
  // let arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  // return Mock.mock(arr)
  return Mock.mock(template)
}
