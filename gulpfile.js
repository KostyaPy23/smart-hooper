var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // sourcemaps = require("gulp-sourcemaps"),
    browserSync = require('browser-sync'),
    path = require("path"),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
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

// Copy jQuery library
gulp.task("jquery", function () {
    return gulp.src('node_modules/jquery/dist/*')
        .pipe(gulp.dest('app/js/jquery/'))
});


gulp.task("scripts", function () {
    return gulp.src([
        'node_modules/twitter-bootstrap-wizard/bootstrap/js/bootstrap.min.js',
        'node_modules/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
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