define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShopItemTpl = require('text!templates/ShopItem/ShopItem.tpl');
        
    var ShopItemView = Backbone.View.extend({
        tagName: 'div',
        className: 'shop-item',
        
        template: _.template(ShopItemTpl),
        
        render: function(){
            this.$el.html( this.template( this.model.toJSON()));
            return this;
        }
    });
    
    return ShoppingCart.Views.Items.ShopItemView = ShopItemView;
});