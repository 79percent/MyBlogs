const http = require('http');
const url = require('url');
const { createProxyMiddleware } = require('http-proxy-middleware');


const server = http.createServer((req, res) => {
  /**
   * 当访问当前服务时，会代理到其他的服务器地址
   */
  const apiProxy = createProxyMiddleware('/api', {
    target: 'https://api.bilibili.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',// 重写路径 
    }
  });
  apiProxy(req, res);
})

server.listen(9080, 'localhost', () => {
  console.log('locahost:9080 start')
})