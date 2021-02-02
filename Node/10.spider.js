/**
 * 简单的爬虫，抓取网页，并分析内容
 * 原理：请求一个网页后，会获取到html代码，分析这些html代码，提取出有用的内容。
 * 在node里面虽然不能像浏览器里一样，直接操作DOM，但是可以转换成虚拟DOM，来获取到DOM的文本、图片地址、视频地址等等
 * cheerio第三方模块可以把一段字符串作为html代码来解析，并且可以像jq一样来操作DOM
 */
const http = require('http');
const https = require('https');
const cheerio = require('cheerio');

function filterData(data) {
  const $ = cheerio.load(data);
  $('.section-item-box p').each((index, el) => {
    console.log($(el).text())
  })
}

const server = http.createServer((request, response) => {
  https.get('https://www.meizu.com', (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk
    })
    res.on('end', () => {
      filterData(data);
    })
  })
});

server.listen(8888, 'localhost', () => {
  console.log('localhost:8888 start!!!')
});
