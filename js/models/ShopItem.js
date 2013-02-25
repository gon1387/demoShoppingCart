define(['backbone'], function(Backbone){
    var ShopItem = Backbone.Model.extend({
        defaults: {
            name: 'n/a',
            description: 'n/a',
            price: '0.00',
            category: '',
            photo: ''
        }
    });
    return ShopItem;
});