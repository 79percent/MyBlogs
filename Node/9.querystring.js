/**
 * Node内置模块 querystring
 * url参数处理
 */
const querystring = require('querystring')

// const paramsUrl = 'foo=bar&abc=xyz&abc=123'

// const parseObj = querystring.parse('foo=bar&abc=xyz&abc=123')
// console.log(parseObj)

// const urlStr = querystring.stringify(parseObj)
// console.log(urlStr)

// const parseObj2 = querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
//   { decodeURIComponent: querystring.unescape });
// console.log(parseObj2)

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }))

console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':'))