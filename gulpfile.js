
var browserify = require('browserify');
var concat = require('gulp-concat');
var gulp = require('gulp');
var merge = require('merge-stream');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  var styleStream = gulp.src('docs/css/src/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('docs/css'));

  var scriptStream = browserify('docs/js/src/main.jsx')
    .transform('babelify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('docs/js'));

  return merge(styleStream, scriptStream);
});
