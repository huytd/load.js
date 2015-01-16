var gulp = require('gulp');
var browserSync = require('browser-sync');
var exec = require('child_process').exec;
var reload = browserSync.reload;

gulp.task('default', [], function () {
    console.log("Command:\n   serve - run live reload server");
});

gulp.task('build', [], function(){
    console.log("Rebuild");
    exec('cat src/*.js > lib/load.debug.js');
    exec('./build.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });

    gulp.watch([
            '*.html',
            'js/*.js',
            'css/*.css',
            'src/*.*',
        ], ['build', reload]);

    /*gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], ['build', reload]);
    gulp.watch(['css/*.css'], ['build', reload]);*/
});
