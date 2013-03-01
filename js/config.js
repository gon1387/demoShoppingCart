requirejs.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        
        libs: 'libs',
        models: 'models',
        collections: 'collections',
        templates: 'templates',
        views: 'views',
        utils: 'utils',
        
        text: 'libs/require/text',
        domReady: 'libs/require/domReady'
        
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }
});