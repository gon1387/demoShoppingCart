define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart;
    
    var CartItem = Backbone.Model.extend({
        defaults: {
                name: 'n/a',
                quantity: 0,
                price: 0
        },
        validate: function(attr){
            if (!_.isString(attr.name)) {
                return 'CartItem.name should be a string';
            }
            
            if (!_.isNumber(attr.quantity)) {
                return 'CartItem.quantity should be a number';
            }
            
            if (!_.isNumber(attr.price)) {
                return 'CartItem.price should be a number';
            }
        }
    });
    console.log(require('utils/Globals'));
    return ShoppingCart.Models.CartItem = CartItem;
});