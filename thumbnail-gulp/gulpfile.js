var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function() {
  // Get all files in src directory
  return gulp.src('src/**')
    // Then run gulp-react to compile jsx to js
    .pipe(react())
    // Then combine all files into application.js
    .pipe(concat('application.js'))
    // Then save file in current directory
    .pipe(gulp, dest('./'))
})
