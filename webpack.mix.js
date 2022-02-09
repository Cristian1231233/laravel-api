const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/admin.js', 'public/js')
    .js('resources/js/ghest.js', 'public/js')
    .sass('resources/sass/admin/style.scss', 'public/css/admin')
    .sass('resources/sass/ghest/style.scss', 'public/css/ghest')
    .options({
        processCssUrl: false
    });