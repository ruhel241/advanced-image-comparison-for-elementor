let mix = require('laravel-mix');
mix.setPublicPath('assets');

mix.sass('./resources/sass/css/aic_image_comparison.scss', './assets/css/aic_image_comparison.css');
mix.sass('./resources/sass/css/twentytwenty.scss', './assets/css/twentytwenty.css');
mix.js('resources/js/custom.js', 'assets/js/custom.js');
mix.js('resources/js/jquery.event.move.js', 'assets/js/jquery.event.move.js');
mix.js('resources/js/jquery.twentytwenty.js', 'assets/js/jquery.twentytwenty.js');
