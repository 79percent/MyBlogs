/**
 * 文件流
 */
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./logs/log-0.js');

// const writeStream = fs.createWriteStream('./logs/log-0-0.js');
const writeStream = fs.createWriteStream('./logs/log-0.gzip');

/**
 * 拷贝文件
 */
// readStream.pipe(writeStream)

/**
 * 压缩文件
 */
readStream.pipe(gzip).pipe(writeStream)

// readStream.pipe(gzip).pipe(writeStream)