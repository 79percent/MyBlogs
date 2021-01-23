/**
 * 网络通信http https
 * node发请求与浏览器不同，浏览器因为同源策略，不能直接使用第三方接口，会存在跨域问题，node里面则没有限制
 * 因此，可以通过这个特性来封装第三方的接口，间接地使用第三方接口
 */
const http = require('http');
const https = require('https');

http.get('http://www.baidu.com', (res) => {
  res.on('data', (chunk) => {
    console.log(chunk);
  })
  res.on('end', () => {
    console.log('end')
  })
})