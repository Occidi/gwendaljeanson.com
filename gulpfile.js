var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');

gulp.task('scripts', function () {
    return gulp.src('js_dev/*.js')
    .pipe(concat('grayscale.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('grayscale.css'))
    .pipe(uncss({
            html: ['index.html']
        }))
    .pipe(nano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});


// Run everything
gulp.task('watch',function()
{
    gulp.watch('js_dev/*.js', ['scripts']);
    gulp.watch('sass/**/*.scss', ['sass']);
});