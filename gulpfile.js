const gulp = require('gulp');
const sass = require('gulp-sass');

function scss() {
  return gulp
    .src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
}

function watch() {
  gulp.watch('./*.scss', scss);
}

exports.scss = scss;
exports.watch = watch;
