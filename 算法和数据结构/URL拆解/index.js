/**
 * --- 题目描述 ---
 * 
 * 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key: value 形式的 object  
 * 
 * --- 实例 ---
 * 
 * 输入：'http://sample.com/?a=1&e&b=2&c=xx&d#hash' 
 * 输出：{a: 1, b: 2, c: 'xx', d: ''}  
 */
function parseURl(url = '') {
  const href = url;
  const [origin, others] = url.split('?');
  const [search, hash] = others.split('#');
  const searchs = search.split('&');
  const searchParams = {};
  searchs.forEach(item => {
    const [key, value] = item.split('=');
    if (key !== undefined && value !== undefined) {
      searchParams[key] = value
    }
  })
  return {
    href,
    origin,
    hash,
    search,
    searchParams,
  };
}
var url = 'http://sample.com/?a=1&e&b=2&c=xx&d#hash'
var res = parseURl(url);
console.log(res)

/**
 * 参考了web浏览器上的 URL 构造函数(node环境没有这个构造函数)
 * new URl('http://sample.com/?a=1&e&b=2&c=xx&d#hash')
 */