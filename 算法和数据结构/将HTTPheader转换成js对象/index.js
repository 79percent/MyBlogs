/**
 * --- 题目描述 ---
 *
 * 实现一个方法，把 HTTP 文本形式(字符串)的 header 转换成 JS 对象。
 *
 * --- 测试用例 ---
 *
 * 输入：
 * `Accept-Ranges: bytes
 * Cache-Control: max-age=6000, public
 * Connection: keep-alive
 * Content-Type: application/javascript`
 * 输出：
 * {
 *   "Accept-Ranges": "bytes",
 *   "Cache-Control": "max-age=6000, public",
 *   Connection: "keep-alive",
 *   "Content-Type": "application/javascript"
 * }
 */
function parseHttpHeader(header) {
  const obj = {};
  header.split('\n').forEach(element => {
    const [key, value] = element.split(':')
    if (key) {
      obj[key.trim()] = value.trim();
    }
  });
  return obj;
}
var header =
  `
Accept-Ranges: bytes
Cache-Control: max-age=6000, public
Connection: keep-alive
Content-Type: application/javascript
`
var res = parseHttpHeader(header);
console.log(res);