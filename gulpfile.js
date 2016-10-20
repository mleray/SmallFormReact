const gulp = require("gulp");
const less = require("gulp-less");
const browserSync = require("browser-sync").create();
const react = require("gulp-react");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");

// task to spin-up a server
gulp.task("browserSync", function() {
  browserSync.init({
    server: "src"
  });
});

// task to build CSS from LESS
gulp.task("css", function() {
  return gulp.src("src/less/*.less")
    .pipe(less())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// task to build JS file from JSX
gulp.task("build", function () {
    return browserify({ entries: "src/jsx/App.jsx", extensions: [".jsx"], debug: true })
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("src/js/dist"))
        .pipe(browserSync.reload({
          stream: true
        }))
});

// task to watch changes and reload accordingly
gulp.task("watch", ["browserSync", "build", "css"], function () {
    gulp.watch("src/jsx/*.jsx", ["build"]);
    gulp.watch("src/less/*.less", ["css"]);
    gulp.watch("src/*.html", browserSync.reload); 
});

// default task
gulp.task("default", ["watch"]);