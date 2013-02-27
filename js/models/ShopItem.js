define(['jquery','underscore','backbone'], function($, _, Backbone){
    var ShopItem = Backbone.Model.extend({
        defaults: {
            name: 'n/a',
            description: 'n/a',
            price: 0,
            category: '',
            //TODO: Look for a placeholder photo and change the default value
            //  as it's path
            photo: ''
        },
        validate: function(attr){
            if (!_.isString(attr.name)) {
                return 'CartItem.name should be a string';
            }
            
            if (!_.isString(attr.description)) {
                return 'CartItem.name should be a string'
            }
            
            if (!_.isNumber(attr.price)) {
                return 'CartItem.price should be a number'
            }
            
            if (!_.isString(attr.category)) {
                return 'CartItem.price should be a string'
            }
            //TODO: Create a validation for photo url
        }
    });
    return ShopItem;
});