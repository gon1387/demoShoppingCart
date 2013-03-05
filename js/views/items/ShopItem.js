define(function(require, exports, module) {
    'use strict';
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShopItemTpl = require('text!templates/ShopItem/ShopItem.tpl');
    
    require('libs/jquery/jquery-ui');
        
    var ShopItemView = Backbone.View.extend({
        tagName: 'div',
        className: 'shop-item',
        
        template: _.template(ShopItemTpl),
        
        initialize: function() {
            var $el = this.$el,
                pageView = this.options.pageView,
                that = this;
                
            $el.draggable({
                revert: true,
                zIndex: 999,
                start: function() {
                    pageView.trigger("shopitem:draggable:start", [that]);
                },
                stop: function() {
                    pageView.trigger("shopitem:draggable:stop", [that]);
                },
                drag: function() {
                    pageView.trigger("shopitem:draggable:drag", [that]);
                }
            });
        },
        
        render: function(){
            var $el = this.$el,
                that = this;
            $el.html( this.template( this.model.toJSON()));
            
            return this;
        }
    });
    
    return ShoppingCart.Views.Items.ShopItemView = ShopItemView;
});