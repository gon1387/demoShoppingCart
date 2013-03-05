define(function(require, exports, module) {
    'use strict';
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        CartItemListView = require('views/widgets/CartItemList'),
        CartItemAddView = require('views/widgets/CartItemAdd');
    
    require('libs/jquery/jquery-ui');
    
    var ShoppingCartView = Backbone.View.extend({
        el: document.getElementById('shopping-cart'),
        
        initialize: function() {
            var pageView =  this.options.pageView;
            
            pageView.on({
                'cartitemlist:droppable:activate': this.showDragOverlay,
                'cartitemlist:droppable:deactivate': this.hideDragOverlay,
                'shopitem:draggable:start': this.setDragItem,
                //'shopitem:draggable:stop': this.unsetDragItem,
                'cartitemlist:droppable:drop': this.showAddWidget
            }, this);
        },
        
        render: function() {
            this.renderCartList();
            return this;
        },
        
        renderCartList: function() {
            var cartList = new CartItemListView({
                collection: this.collection,
                pageView: this.options.pageView,
                widgetView: this
            });
            
            this.$el.find('#cart-contents').append(cartList.render().el);
        },
        
        /*********************************
         * EVENTS
         *********************************/
        showDragOverlay: function() {
            this.$el.find(".drop-overlay").addClass('drag-state-on');
        },
        
        hideDragOverlay: function() {
            this.$el.find(".drop-overlay").removeClass('drag-state-on');
        },
        
        setDragItem: function(itemView) {
            this.itemView = itemView[0];
        },
        
        unsetDragItem: function() {
            this.itemView = null;
        },
        showAddWidget: function() {
            var itemModel = this.itemView.model;
            var cartItemAddView = new CartItemAddView({
                    model: itemModel,
                    pageView: this.options.pageView,
                    widgetView: this
                });
            
            this.$el.prepend(cartItemAddView.render().el);
        }
    });
    
    return ShoppingCart.Views.Widgets.ShoppingCart = ShoppingCartView;
});