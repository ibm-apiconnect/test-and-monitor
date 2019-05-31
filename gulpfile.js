var gulp = require('gulp'),
    plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var sass = require('gulp-sass');

gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('styles', () => {
  return gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules/foundation-sites/scss'] // include path to foundation in node modules
    }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
});

gulp.task('scripts', () => {
  return gulp.src('src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'))
});

gulp.task('watch', () => {
  gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('src/scripts/**/*.js', gulp.series('scripts'));
  gulp.watch('src/images/**', gulp.series('images'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'images'));