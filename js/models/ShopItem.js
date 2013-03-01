define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart;
    
    var ShopItem = Backbone.Model.extend({
        defaults: {
            name: 'n/a',
            description: 'n/a',
            price: 0,
            category: '',
            //TODO: Look for a placeholder photo and change the default value
            //  as it's path
            photo: 'img/Shoes.png'
        },
        validate: function(attr){
            if (!_.isString(attr.name)) {
                return 'ShopItem.name should be a string';
            }
            
            if (!_.isString(attr.description)) {
                return 'ShopItem.description should be a string'
            }
            
            if (!_.isNumber(attr.price)) {
                return 'ShopItem.price should be a number'
            }
            
            if (!_.isString(attr.category)) {
                return 'ShopItem.category should be a string'
            }
            //TODO: Create a validation for photo url
        }
    });
    
    return ShoppingCart.Models.ShopItem = ShopItem;
});