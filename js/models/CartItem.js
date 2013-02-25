define(['backbone'], function(Backbone){
    var CartItem = Backbone.Model.extend({
        defaults: {
                name: 'n/a',
                quantity: 0
        }
    });
    
    return CartItem;
});