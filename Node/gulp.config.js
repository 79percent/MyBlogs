const gulp = require('gulp');

const node_env = process.env.NODE_ENV;// 可以获取到配置脚本的变量
console.log(node_env);

function scripts() {
  return gulp.src('./1.http、https.js', { sourcemaps: true })
    .pipe(gulp.dest('./dist/'));
}

var build = gulp.series(scripts);

exports.default = build;