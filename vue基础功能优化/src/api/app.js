export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => { // 使用定时器模拟异步操作
      if (!err) resolve({ code: 200, info: { appName: 'newAppName' } })
      else reject(err)
    })
  })
}
