define(function(require, exports, module) {
    'use strict';
    var Fn = Function, global = (new Fn("return this"))();
    
    /**
     * Prepares the Shopping cart namespace for use by all modules
     */
    var ShoppingCart;
    ShoppingCart = exports.ShoppingCart = global.ShoppingCart = {
        Models: {},
        Collections: {},
        Views: {}
    }; 
    
    exports.global = global;
});