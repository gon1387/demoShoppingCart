define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCartView = require('views/widgets/ShoppingCart'),
        ShoppingRackView = require('views/widgets/ShoppingRack');
        
    var ShopView = Backbone.View.extend({
        el: document.getElementById('content'),
        
        initialize: function(args){
            var cartItemsCollection = args.cartItemsCollection, 
                shopItemsCollection = args.shopItemsCollection,
                shoppingCartView = new ShoppingCartView({
                    collection: cartItemsCollection,
                    pageView: this
                }), 
                shoppingRackView = new ShoppingRackView({
                    collection: shopItemsCollection,
                    pageView: this
                });
            
            shoppingCartView.render();
            shoppingRackView.render();
            
            this.shoppingCartView = shoppingCartView;
            this.shoppingRackView = shoppingRackView;
        }
        
    });
    
    return ShoppingCart.Views.Pages.Shop = ShopView;
});