define(['jasmine',
        'libs/require/domReady',
        'jasmine-html',
        'TestSuite'
    ],function(jasmine, domReady){ 
    var jasmineEnv = jasmine.getEnv();
    
    htmlReporter = new jasmine.HtmlReporter();
    
    jasmineEnv.addReporter(htmlReporter);
    
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };
    
    domReady(function(){
        jasmineEnv.execute();
    });
});