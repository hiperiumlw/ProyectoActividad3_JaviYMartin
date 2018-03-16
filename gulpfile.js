
//Inicializamos las variables
var gulp=require('gulp'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css');


//Indicamos las tareas por defecto
gulp.task('default',['browser','minJS','minCSS']);



//Inicializamos el Servidor
gulp.task('browser',function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
})

//Cuando haya un cambio se hace el minificar del JS
gulp.watch('assets/js/**/*.js').on('change',function () {
    return gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/main.min.js'))
})

//Cuando haya un cambio se hace el minificar del CSS
gulp.watch('assets/css/**/*.css').on('change',function () {
    return gulp.src('assets/css/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css/style.min.css'))
})

//Cuando haya un cambio se actualiza automaticamente
gulp.watch(['index.html','assets/js/main.js','assets/css/style.css']).on('change',function () {
    browserSync.reload();
})

//Tarea de Minificar JS
gulp.task('minJS',function () {
    return gulp.src('assets/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets/js/main.min.js'))
})

//Tarea de Minificar CSS
gulp.task('minCSS',function () {
    return gulp.src('assets/css/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('assets/css/style.min.css'))
})