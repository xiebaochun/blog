var gulp = require('gulp');

var server = require('./server');

// var watch = require('gulp-watch');

// var filter = require('gulp-filter');

gulp.task('start',function(){
	gulp.run('server');
	gulp.run('watch');
});

gulp.task('watch',function(){
	// watch('source/views/css/**/*.css', function (cb) {
 //        gulp.src('source/views/css/**/*.css')
 //            .pipe(watch('source/views/css/**/*.css'))
 //            .on('end', cb);
 //    });

    // return gulp.src('source/views/css/**/*.css')
    //     .pipe(watch('source/views/css/**/*.css'))
    //     .pipe(changeF)
    //     .pipe(gulp.dest('build'));
    gulp.watch(['./source/**/*.{html,md,css,js}','./build.js'], ['build']);
  
});

gulp.task('server',function(){
	server();
});

gulp.task('build',function(){
	var build = require('./build');
	console.log('changed');
	build();
});

gulp.run(['build']);



