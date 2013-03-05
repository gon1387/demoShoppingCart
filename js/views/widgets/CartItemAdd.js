define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        CartItemModel = require('models/CartItem'),
        CartItemAddTpl = require('text!templates/CartItem/CartItemAdd.tpl');
        
    var CartItemAddView = Backbone.View.extend({
        tagName: 'div',
        id: 'cart-items-add',
        
        template: _.template(CartItemAddTpl),
        initialize:function(){console.log(arguments);},
        render: function(){
            var $el = this.$el;
            this.$el.html( this.template( this.model.toJSON()));
            
            $el.find('#add-cart-item').on(
                "click", _.bind(this.addNewCartItem, this)
            )
            
            return this;
        },
        
        
        /*********************************
         * EVENTS
         *********************************/
        
        addNewCartItem: function() {
            var cartItemModel,
                model = this.model,
                quantity = parseInt(this.$el.find('#quantity').val());
            
            if(quantity){
                cartItemModel = new CartItemModel({
                        name: model.get('name'),
                        price: model.get('price'),
                        quantity: quantity
                    });
                    console.log(this.options);
                this.options.pageView.trigger("cartitemlist:add",[cartItemModel]);
            }
            
            //for garbage collection, to be sure there's no memory leak
            this.model = null;
            this.pageView = null;
            this.widgetView = null;
            this.remove();
        }
    });
    
    return ShoppingCart.Views.Widgets.CartItemAdd = CartItemAddView;
});