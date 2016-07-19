var gulp = require('gulp'); // Responsible for build process
var gutil = require('gulp-util'); // Responsible for printing to CLI
var source = require('vinyl-source-stream'); // Responsible for moving text files during the build process
var browserify = require('browserify'); // Load order
var watchify = require('watchify'); // Tool to automatically re-compile jsx to JS
var reactify = require('reactify'); // Convert jsx into JS

gulp.task('default', function() {
  // Create a bundler to run browserify on code
  var bundler = watchify(browserify({
    entries: 
  }))
})
