/**
 * Node内置模块 crypto
 * 加密
 */
const crypto = require('crypto');

const password = '123';

const hash = crypto.createHash('md5').update(password).digest('hex')
// const hash = crypto.createHash('sha1').update(password).digest('hex')

console.log(hash)