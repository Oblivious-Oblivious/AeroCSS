const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const stripCssComments = require("gulp-strip-css-comments");

const build_styles = () => {
    return src("src/**/*.scss")
        .pipe(sass())
        .pipe(stripCssComments())
        .pipe(dest("export"));
};

const watch_task = () => {
    watch(["src/**/*.scss"], build_styles);
};

exports.default = series(build_styles, watch_task);
