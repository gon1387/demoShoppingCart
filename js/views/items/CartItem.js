define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        CartItemTpl = require('text!templates/CartItem/CartItem.tpl');
        
    var CartItemView = Backbone.View.extend({
        tagName: 'span',
        className: 'cart-item',
        
        template: _.template(CartItemTpl),
        
        render: function(){
            console.log();
            this.$el.html( this.template( this.model.toJSON()));
            return this;
        }
    });
    
    return ShoppingCart.Views.Items.CartItemView = CartItemView;
});