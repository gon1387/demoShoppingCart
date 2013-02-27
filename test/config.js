requirejs.config({
    paths: {
        spec: 'spec',
        
        libs: '../js/libs',
        models: '../js/models',
        collections: '../js/collections',
        templates: '../js/templates',
        views: '../js/views',
        
        jquery: '../js/libs/jquery',
        underscore: '../js/libs/underscore',
        backbone: '../js/libs/backbone',
        jasmine: 'lib/jasmine-1.3.1/jasmine',
        'jasmine-html': 'lib/jasmine-1.3.1/jasmine-html'
    },
    shim: {
        backbone: {
            defs: ['jquery','underscore'],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            defs: ['jasmine'],
            exports: 'jasmine'
        }
    }
});