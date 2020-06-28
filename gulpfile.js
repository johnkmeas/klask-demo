const postcss = require('gulp-postcss');
const gulp = require('gulp');
const partials = require("postcss-partial-import");



gulp.task('css', function () {
  return gulp.src('./styles/theme.scss')
    // ...
    .pipe(postcss([
      // ...
      partials({prefix:"_",extension:".scss"}),
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
    ]))
    // ...
    .pipe(gulp.dest('assets'))
})

gulp.task('watch', function() {
  gulp.watch('./styles/**/*.scss', gulp.parallel('css'));
});