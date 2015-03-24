# Laravel Elixir Extension for SUIT CSS Preprocessor

A simple [Laravel Elixir](https://github.com/laravel/elixir) extension that adds support for the [CSS preprocessor](https://github.com/suitcss/preprocessor) included in [SUIT CSS](https://github.com/suitcss/suit).

--

### Installation

Install this extension:

    npm install laravel-elixir-suitcss --save-dev

Install SUIT CSS with npm:

    npm install suitcss --save-dev

...you can also install [standalone SUIT CSS](https://github.com/suitcss/suit#css-packages) packages:

    npm install <package-name> --save-dev

For further information about SUIT CSS, please see their [repository](https://github.com/suitcss/suit).

--

### Usage

    var gulp = require('gulp');
    
    require('laravel-elixir-suitcss');
    
    elixir(function(mix) {
        mix.suit('index.css');
    });

You can also pass options to the preprocessor:

    mix.suit('index.css', 'public/css/', {'compress': true, 'root': './node_modules/suitcss/node_modules/'});

Supported options are available [in the official SUIT CSS Preprocessor repository](https://github.com/suitcss/preprocessor).

--

### License

This is licensed under the [MIT license](http://byjml.mit-license.org/).

--

### Notes

1. This extension assumes you have installed SUIT CSS with NPM.
2. This extension assumes `index.css` is located at `resources/assets/suit`.
3. This extension installs [gulp-suitcss](https://github.com/Casear/gulp-suitcss) package.
