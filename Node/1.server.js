const { logger } = require('./modules/logger');
const http = require('http');
const https = require('https');
const querystring = require('querystring');

// const server = http.createServer((request, response) => {
//   const { url } = request;// 获取请求url
//   logger.debug(url)
//   let data = ''
//   request.on('data', (chunk) => {
//     logger.debug(chunk)
//     data += chunk
//   })
//   request.on('end', () => {
//     response.writeHead(200, {
//       'content-type': 'application/json;charset=utf-8', //json
//     })
//     const resData = {
//       url,
//       data: querystring.parse(data),
//     }
//     response.write(JSON.stringify(resData))
//     response.end()
//   })
// });

const server = http.createServer((request, response) => {
  https.get('https://www.xiaomiyoupin.com/mtop/market/cat/list', (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      const resData = {
        data: JSON.stringify(data)
      }
      response.write(JSON.stringify(resData))
      response.end()
    })
  })
});

server.listen(8090, 'localhost', () => {
  logger.debug('localhost:8090 start!!!')
});
