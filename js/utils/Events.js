define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart;
        
    ShoppingCart.EVT = ShoppingCart.EVT || _.extend({}, Backbone.Events);
    
    return ShoppingCart.EVT
});