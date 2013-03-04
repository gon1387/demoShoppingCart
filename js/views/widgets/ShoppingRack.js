define(function(require, exports, module) {
    'use strict';
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        ShopItemListView = require('views/widgets/ShopItemList');
    
    require('libs/jquery/jquery-ui');
    
    var ShoppingRackView = Backbone.View.extend({
        el: document.getElementById('shop-rack'),
        
        render: function() {
            var shopItemView = new ShopItemListView({collection: this.collection});
            
            this.$el.append( shopItemView.render().el);
            
            return this;
        }
        
    });
    
    return ShoppingCart.Views.Widgets.ShoppingRack = ShoppingRackView;
});