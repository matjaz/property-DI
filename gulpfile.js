var gulp = require('gulp');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');

gulp.task('build', function () {
  return gulp.src('*/*.ts')
    .pipe(plumber())
    .pipe(ts({
      target: 'ES5',
      module: 'commonjs',
      declarationFiles: true,
      emitDecoratorMetadata: true,
      typescript: require('typescript')
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build']);
