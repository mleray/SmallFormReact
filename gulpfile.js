const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("less", function(){
	return gulp.src("app/less/*.less")
		.pipe(less())
		.pipe(gulp.dest("app/css/"))
});