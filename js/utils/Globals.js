define(function(require, exports, module) {
    'use strict';
    var Fn = Function, global = (new Fn("return this"))();
    
    /**
     * Prepares the Shopping cart namespace for use by all modules
     */
    var ShoppingCart;
    ShoppingCart = exports.ShoppingCart = global.ShoppingCart || (global.ShoppingCart = {
        Models: {},
        Collections: {},
        Views: {
            Pages: {},
            Widgets: {},
            Items: {}
        }
    }); 
    console.log(global.ShoppingCart.Views.Widgets);
    /**
     * Registers a namespace and object in the global context
     * 
     * @param namespace string
     * @param obj object
     */
    function register(namespace, obj){
        var loc=ShoppingCart,
            nmspc = namespace.split('/'),
            nmspcLen = nmspc.length;
            
        _.each(nmspc, function(pckg,idx){
            if(loc[pckg] && idx < 3){
                loc = loc[pckg];
            } else if(nmspcLen>1){
                loc[pckg] = obj;
            }
        });
    };
    
    exports.register = register;
    exports.global = global;
});