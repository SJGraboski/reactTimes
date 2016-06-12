// dependencies
var gulp = require('gulp');
var install = require("gulp-install");
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');


// gulp task
gulp.task('default', function() {
	// gulp src: if package.json is in the file stream, run this
	gulp.src("./package.json")
		// pipe install to package.json
	  .pipe(install());

	// if there's an app/app.js
	gulp.src('./app/app.js')
		// get the webpack config file
    .pipe(webpack( require('./webpack.config.js') ))
    // dest is empty since the output's already specified in the config
    .pipe(gulp.dest(''))

  //run the nodemon gulp plugin
  nodemon({
  	// run server.js
    script: 'server.js',
    // update the server whenever the dev updates a js or html file
    ext: 'js html',
    // run in dev mode
  	env: { 'NODE_ENV': 'development' }
  })
});