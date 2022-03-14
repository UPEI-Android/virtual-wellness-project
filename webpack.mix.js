const mix = require('laravel-mix');
const path = require("path");

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

mix.js('resources/js/app.jsx', 'public/js')
    .react()
    .sass('resources/sass/app.scss', 'public/css')
    .styles('resources/css/app.css', 'public/css/app.css');
   
mix.webpackConfig({
    resolve: {
        alias: {
            //adding react and react-dom may not be necessary for you but it did fix some issues in my setup.
            'react' : path.resolve('node_modules/react'),
            'react-dom' : path.resolve('node_modules/react-dom'),
        },
    },
});
