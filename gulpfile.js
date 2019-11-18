var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    less = require("gulp-less"),
    autoprefixer = require("autoprefixer"),
    concat = require("gulp-concat"),
    watch = require("gulp-watch");

gulp.task("style", function(done) {
  var processors = [autoprefixer];
  gulp
    .src("./assets/less/style.less")
    .pipe(less())
    .pipe(postcss(processors))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./assets/css/"));
  done();
});

gulp.task("watch", function() {
  gulp.watch(["assets/less/*.less"], gulp.series("style"));
});
