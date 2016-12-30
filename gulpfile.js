var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require("gulp-concat");


gulp.task('scripts', function () {
    gulp.src('js_dev/*.js')
    .pipe(concat('grayscale.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});