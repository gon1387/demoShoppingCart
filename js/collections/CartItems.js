define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        CartItem = require('models/CartItem');
        
    var CartItems = Backbone.Collection.extend({
        model: CartItem
    });
    
    return CartItems;
});