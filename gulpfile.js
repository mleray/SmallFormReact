const gulp = require("gulp");
const less = require("gulp-less");
const browserSync = require("browser-sync").create();
const react = require("gulp-react");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");

gulp.task("build", function () {
    return browserify({ entries: "src/jsx/App.jsx", extensions: [".jsx"], debug: true })
        .transform("babelify", { presets: ["es2015", "react"] })
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", ["build"], function () {
    gulp.watch("src/jsx/*.jsx", ["build"]);
});

gulp.task("default", ["watch"]);