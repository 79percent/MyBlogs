const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});

const logger = log4js.getLogger("cheese");
logger.level = 'debug'


const url = require('url');
const urlStr = 'https://www.baidu.com:443/path/index.html?id=2#tag=3'
const urlObj = url.parse(urlStr);// 将url字符串解析成一个对象

// logger.debug(urlObj)// 会生成cheese.log日志文件

// const urlStr2 = url.format(urlObj);// 将url对象解析成url字符串
// logger.debug(urlStr2);

// logger.debug(url.resolve('http://www.abc.com/a', '../'))
// logger.debug(url.resolve('http://www.abc.com/a', '/b'))


const urlParams = new URLSearchParams(urlObj.search);// 传入url？后面的参数
logger.debug(urlParams)// 解析参数成一个对象
logger.debug(urlParams.get('id'))// 获取id参数
