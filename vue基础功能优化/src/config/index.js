export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com'
  : 'http://localhost:3000' // 在前端使用了代理的情况下，这里为空即可；此处写的我们使用服务器的URL
