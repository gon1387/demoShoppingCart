define(function(require, exports, module) {
    'use strict';
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        ShopItemView = require('views/items/ShopItem');
        
    var ShopItemList = Backbone.View.extend({
        tagName: 'div',
        id: 'shop-rack',
        
        
        
        render: function(){
            this.$el.empty();
            this.collection.each(function(ShopItem){
                var shopItemView = new ShopItemView({model: ShopItem});
                this.$el.append(shopItemView.render().el);
            }, this);
            
            return this;
        }
    });
    
    return ShoppingCart.Views.Widgets.ShopItemList = ShopItemList;
});