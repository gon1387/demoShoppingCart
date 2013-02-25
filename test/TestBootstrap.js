define(['jasmine',
        'jasmine-html',
        'libs/backbone/domReady'
    ],function(jasmine, htmlReporter, domReady){
    var jasmineEnv = jasmine.getEnv();
    
    htmlReporter = new htmlReporter()
        
    jasmineEnv.addReporter(htmlReporter);
    
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };
    
    domReady(function(){
        jasmineEnv.execute();
    });
});