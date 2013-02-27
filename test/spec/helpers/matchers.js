define(function(require, exports, module){
    var $ = require('jquery'),
        _ = require('underscore');
    
    beforeEach(function(){
        this.addMatchers({
            toBeFunction: function(){
                this.message = function(){
                    //TODO: Ugly message when using 'not' (not.toBeFunction).
                    // find ways to fix this.
                    return "Expected " + this.actual + (this.isNot? ' not': '') + ' to be a function';
                };
                return _.isFunction(this.actual); 
            },
            toBeEmptyString: function(){
                this.message = function(){
                    return "Expected " + this.actual + (this.isNot? ' not': '') + ' to be an empty string';
                };
                return _.isEmpty(this.actual); 
            }
        });
    });
});