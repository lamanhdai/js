;
(function () {
'use strict';
var gulp = require('gulp'),
    pug = require('gulp-pug'),

    imagemin = require('gulp-imagemin'),

    sass = require('gulp-sass'),
    pleeease = require('gulp-pleeease'),

    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    uglifyjs = require('uglify-js'),
    composer = require('gulp-uglify/composer'),
    sourcemaps   = require('gulp-sourcemaps'),

    del = require('del'),
    browserSync = require('browser-sync');

var src = './src',
    build = './build';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// =============================================
// prefixer, minimize css
//
var cssOutput = {
  autoprefixer: true,
  minifier: true,
  browsers: [
    'last 4 versions',
    'ios 7',
    'Firefox >= 20'
  ]
};

// =============================================
// minimize js
//
var minify = composer(uglifyjs);

// =============================================
// build html
//
gulp.task('pug', function(){
  gulp.src(src + '/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(build))
        .pipe(browserSync.reload({stream:true}));
});

// =============================================
// build image
//
gulp.task('image', function () {
  gulp.src([src+'/**/*.png', src+'/**/*.jpg', src+'/**/*.gif'])
        .pipe(imagemin({verbose: true}))
        .pipe(gulp.dest(build))
        .pipe(browserSync.reload({stream:true}));
});

// =============================================
// build scss
//
gulp.task('sass', function () {
  gulp.src(src+'/**/*.scss')
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(pleeease(cssOutput))
        .pipe(gulp.dest(build))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('eslint', function() {
  gulp.src([src + '/**/*.{js}'])
    .pipe(eslint({
      baseConfig: {
        "ecmaFeatures": {
            "jsx": true
          }
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// =============================================
// build js
//
gulp.task('js', ['eslint'], function(){
  gulp.src(src + '/**/*.{js,jsx}')
        .pipe(sourcemaps.init())
        .pipe(minify())
        .pipe(gulp.dest(build))
        .pipe(browserSync.reload({stream:true}));
});

// =============================================
// Copy font
//
gulp.task('font', function(){
  gulp.src(src+'/**/*.ttf')
      .pipe(gulp.dest(build))
      .pipe(browserSync.reload({stream:true}));
});

// =============================================
// change file
//
gulp.task('watch', function() {
  gulp.watch(src+'/**/*.scss', ['sass']);
  gulp.watch([src+'/**/*.pug', src + '/**/*.js'], ['pug']);
  gulp.watch(src+'/**/*.js', ['js']);
});

// =============================================
// clean folder build
//
gulp.task('clean', function() {
  // del([build+'/**']);
});

// =============================================
// virtual server
//
gulp.task('server', function () {
  browserSync({
    server: {
      baseDir: build
    }
  });
});

gulp.task('default', ['clean', 'watch', 'image', 'pug', 'sass', 'js', 'font', 'server']);
})();
