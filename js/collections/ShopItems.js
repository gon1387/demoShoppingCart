define(['jquery', 
        'underscore', 
        'backbone',
        'models/ShopItem'],
function($, _, Backbone, ShopItem) {
    var ItemList = Backbone.Collection.extend({
        model: ShopItem
    });
    
    return ItemList;
});