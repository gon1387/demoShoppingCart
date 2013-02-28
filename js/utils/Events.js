define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart;
        
        exports.EVT = ShoppingCart.EVT || _.extend(EVT, Backbone.Events);
});