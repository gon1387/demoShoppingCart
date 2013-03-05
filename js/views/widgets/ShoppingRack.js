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
        
        initialize: function() {
            var pageView = this.options.pageView
            if (pageView) {
                
            }
        },
        
        render: function() {
            var shopItemView = new ShopItemListView({
                collection: this.collection,
                pageView: this.options.pageView,
                widgetView: this
            });
            
            this.$el.append( shopItemView.render().el);
            
            return this;
        }
        
    });
    
    return ShoppingCart.Views.Widgets.ShoppingRack = ShoppingRackView;
});