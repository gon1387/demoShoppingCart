define(function(require, exports, module) {
    'use strict';
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        CartItemView = require('views/items/CartItem');
        
    var CartItemList = Backbone.View.extend({
        tagName: 'div',
        id: 'cart-items',
        
        render: function(){
            this.$el.empty();
            this.collection.each(function(CartItem){
                var cartItemView = new CartItemView({model: CartItem});
                this.$el.append(cartItemView.render().el);
            }, this);
            
            return this;
        }
    });
    
    return ShoppingCart.Views.Widgets.CartItemList = CartItemList;
});