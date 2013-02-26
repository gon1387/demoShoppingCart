define(['jquery','underscore','backbone'], function($, _, Backbone){
    var CartItem = Backbone.Model.extend({
        defaults: {
                name: 'none',
                quantity: 0,
                price: 0
        }
    });
    
    return CartItem;
});