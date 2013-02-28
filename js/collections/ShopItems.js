define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShopItem = require('models/ShopItem');
        
    var ShopItems = Backbone.Collection.extend({
        model: ShopItem
    });
    
    return ShopItems;
});