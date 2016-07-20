var gulp = require('gulp'); // Responsible for build process
var gutil = require('gulp-util'); // Responsible for printing to CLI
var source = require('vinyl-source-stream'); // Responsible for moving text files during the build process
var browserify = require('browserify'); // Load order
var watchify = require('watchify'); // Tool to automatically re-compile jsx to JS
var reactify = require('reactify'); // Convert jsx into JS

gulp.task('default', function() {
  // Create a bundler to run browserify on code
  // Watchify will watch for changes, and then re-run the gulp file
  var bundler = watchify(browserify({
    // Go to most parent component of application
    entries: ['./src/app.jsx'],
    // While browserify is finding dependencies, use reactify to convert jsx->JS
    transform: [reactify],
    // Look at these specific files during build process
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packagecache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      // Throw an error to CLI
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'))
  };
  build();
  bundler.on('update', build)
});
