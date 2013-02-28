define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        CartItem = require('models/CartItem').CartItem;
        
    var CartItems = Backbone.Collection.extend({
        model: ShoppingCart.Models.CartItem
    });
    
    exports.CartItems = ShoppingCart.Collections.CartItems = CartItems;
});