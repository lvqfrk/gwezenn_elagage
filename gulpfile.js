var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create()
webpack = require('webpack'),
imagemin = require('gulp-imagemin'),
del = require('del')
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano')
uglify = require('gulp-uglify');

/**
 * Compile css.
 */
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

/**
* this task watch for change in specified files,
* and then trigger another task.
*/
gulp.task('watch', function() {

  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
      browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });
});

/**
* this method inject css change without reload the pages.
*/
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

/**
* refresh the page if there is javascript changes.
*/
gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});


// --- BUILD PART ---

gulp.task('previewDist', function() {
  browserSync.init({
    server: {
      // change this to dist for real build
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDistFolder', function(){
  // change this to dist for real build
  return del("./docs");
});

gulp.task('optimizeImages', ['deleteDistFolder'], function(){
  return gulp.src(['./app/assets/images/*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    // change this to dist for real build
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    // change this to dist for real build
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder','optimizeImages', 'usemin']);
