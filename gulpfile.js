var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // sourcemaps = require("gulp-sourcemaps"),
    browserSync = require('browser-sync'),
    path = require("path"),
    // concat = require('gulp-concat'),
    // uglify = require('gulp-uglifyjs'),
    del = require('del');
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // cache = require('gulp-cache');


// Browser Sync Task
gulp.task("browser-sync", function () {
    browserSync({
        server: {
            baseDir: "app",
            routes: {
                "/node_modules": "node_modules"
            }
        },
        notify: false
    });
});


// Watch Sass|Scss files
gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.+(scss|sass)')
    // .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
            // outputStyle: 'compressed'
        }).on('error', sass.logError))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

// Gulp Watch Task
gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
    gulp.watch('node_modules/owl.carousel/dist/**', browserSync.reload);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});