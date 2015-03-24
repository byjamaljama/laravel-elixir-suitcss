var gulp = require('gulp'),
    notify = require('gulp-notify'),
    elixir = require('laravel-elixir'),
    suitcss = require('gulp-suitcss'),
    utilities = require('laravel-elixir/ingredients/commands/Utilities');

elixir.extend("suit", function(src, output, options) {

    var config = this;

    var fallbackOptions = {
        'compress': config.production ? true : false,
        'root': './node_modules/suitcss/node_modules/'
    };

    var baseDir = config.assetsDir + 'suit',
        src = utilities.buildGulpSrc(src, baseDir, '**/*.css'),
        output = output || config.cssOutput,
        options = options || fallbackOptions;

    gulp.task('suit', function() {
        var onError = function(err) {
            notify.onError({
                title:    "Laravel Elixir",
                subtitle: "SUIT CSS compilation failed!",
                message:  "Error: <%= error.message %>",
                icon: __dirname + '/../laravel-elixir/icons/fail.png'
            })(err);

            this.emit('end');
        };

        gulp.src(src)
            .pipe(suitcss(options)).on('error', onError)
            .pipe(gulp.dest(output))
            .pipe(notify({
                title: 'Laravel Elixir',
                subtitle: 'SUIT CSS compiled!',
                icon: __dirname + '/../laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    });

    this.registerWatcher("suit", baseDir + '/**/*.css');

    return this.queueTask("suit");

});