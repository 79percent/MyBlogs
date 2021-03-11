/**
 * 学一下正则
 */

/**
 * 一个正则表达式可以写成这样：
 * const reg = /pattern/flags;
 * pattern表示模式
 * flag表示标记
 */

/**
 * 标记有以下几种：
 * g：全局匹配
 * i：不区分大小写
 * m：多行查找
 * y：只查找从lastIndex开始及之后的字符串
 * u：启用Unicode匹配
 * s：表示元字符.匹配任何字符（包括\n或\r）
 */

/**
 * 模式语法
 . - 除换行符以外的所有字符。
 ^ - 字符串开头。
 $ - 字符串结尾。
 \d,\w,\s - 匹配数字、字符、空格。
 \D,\W,\S - 匹配非数字、非字符、非空格。
 [abc] - 匹配 a、b 或 c 中的一个字母。
 [a-z] - 匹配 a 到 z 中的一个字母。
 [^abc] - 匹配除了 a、b 或 c 中的其他字母。
 aa|bb - 匹配 aa 或 bb。
 ? - 0 次或 1 次匹配。
 * - 匹配 0 次或多次。
 + - 匹配 1 次或多次。
 {n} - 匹配 n次。
 {n,} - 匹配 n次以上。
 {m,n} - 最少 m 次，最多 n 次匹配。
 (expr) - 捕获 expr 子模式,以 \1 使用它。
 (?:expr) - 忽略捕获的子模式。
 (?=expr) - 正向预查模式 expr。
 (?!expr) - 负向预查模式 expr。
 */

/**
 * 1. 匹配字符串两边空格，并去除两边空格,用正则实现字符串trim()方法
 */
var reg = /(^\s*) | (\s*$)/g;
console.log(' a a a '.replace(reg, '空格')) // 空格a a a空格
console.log(' a a a'.replace(reg, '空格')) // 空格a a a
console.log('a a a '.replace(reg, '空格')) // a a a空格
console.log('a a a'.replace(reg, '空格')) // a a a
