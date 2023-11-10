

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

// مهمة لدمج وضغط ملفات JavaScript
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js') // مسار الملفات الأصلية
    .pipe(concat('app.min.js')) // اسم الملف الناتج
    .pipe(uglify()) // ضغط الملف
    .pipe(gulp.dest('/dist/copy')); // مجلد الناتج
});

// مهمة لدمج وضغط ملفات CSS
gulp.task('styles', function() {
  return gulp.src('src/css/*.css') // مسار الملفات الأصلية
    .pipe(concat('styles.min.css')) // اسم الملف الناتج
    .pipe(cleanCSS()) // ضغط الملف
    .pipe(gulp.dest('dist/css')); // مجلد الناتج
});

// مهمة افتراضية تشغل كلا المهام المذكورة أعلاه
gulp.task('default', gulp.parallel('scripts', 'styles'));
