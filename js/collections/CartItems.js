define(['jquery', 
        'underscore', 
        'backbone', 
        'models/ShopItem'], 
function($, _, Backbone, ShopItem){
    var CartItems = Backbone.Collection.extend({
        model: ShopItem
    });
    
    return CartItems;
});