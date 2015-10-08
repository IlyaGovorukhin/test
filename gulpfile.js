// $ npm install gulp gulp-jade gulp-less  gulp-imagemin  gulp-concat connect --save-dev

var gulp = require('gulp'), // Сообственно Gulp JS
    jade = require('gulp-jade'), // Плагин для Jade
    less = require('gulp-less'), // Плагин для Stylus
    imagemin = require('gulp-imagemin'), // Минификация изображений
    concat = require('gulp-concat'); // Склейка файлов


// Собираем less
gulp.task('less', function() {
    gulp.src('app/css/*.less')

});

// Собираем html из Jade

    gulp.task('jade', function() {
        gulp.src('app/*.jade')
            .pipe(jade({
                pretty: true
            }))  // Собираем Jade только в папке app
            .on('error', console.log) // Если есть ошибки, выводим и продолжаем


    });



// Собираем JS
    gulp.task('js', function() {
        gulp.src('app/js/*.js')


    });



// Копируем и минимизируем изображения

    gulp.task('images', function() {
        gulp.src('app/img/*')


    });



// Запуск сервера разработки gulp watch
    gulp.task('watch', function() {
        // Предварительная сборка проекта
        gulp.watch('less');
        gulp.watch('jade');
        gulp.watch('images');
        gulp.watch('js');


    });



    gulp.task('build', function() {
        // css
        gulp.src('app/css/*.less')
            .pipe(less())
            .pipe(gulp.dest('dist/css/'));

        // jade
        gulp.src('app/*.jade')
            .pipe(jade())
            .pipe(gulp.dest('dist/'))

        // js
        gulp.src('app/js/*.js')
            .pipe(concat('index.js'))
            .pipe(gulp.dest('dist/js'));



        // image
        gulp.src('app/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('dist/img'))

    });

gulp.task('default', ['watch']);