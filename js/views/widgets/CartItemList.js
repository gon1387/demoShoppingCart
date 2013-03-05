define(function(require, exports, module) {
    'use strict';
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        ShoppingCart = require('utils/Globals').ShoppingCart,
        CartItemView = require('views/items/CartItem');
    
    require('libs/jquery/jquery-ui');
    
    var CartItemListView = Backbone.View.extend({
        tagName: 'div',
        id: 'cart-items',
        
        initialize: function() {
            var $el = this.$el,
                pageView = this.options.pageView,
                that = this;
                
            //Configure element droppable
            $el.droppable({
                accept: '.shop-item',
                activate: function() {
                    pageView.trigger("cartitemlist:droppable:activate", [that]);
                },
                deactivate: function() {
                    pageView.trigger("cartitemlist:droppable:deactivate", [that]);
                },
                drop: function() {
                    pageView.trigger("cartitemlist:droppable:drop", [that]);
                },
                out: function() {
                    pageView.trigger("cartitemlist:droppable:out", [that]);
                },
                over: function() {
                    pageView.trigger("cartitemlist:droppable:over", [that]);
                }
            });
            
            pageView.on('cartitemlist:add', this.addCartItem, this);
        },
        
        render: function(){
            var $el = this.$el;
            
            this.collection.each(function(CartItem){
                var cartItemView = new CartItemView({
                        model: CartItem,
                        pageView: this.options.pageView,
                        widgetView: this
                    }),
                    $el = this.$el;
                $el.append(cartItemView.render().el);
            }, this);
            
            return this;
        },
        
        getItemNames: function() {
            return this.collection.pluck("name");
        },
        
        /*********************************
         * EVENTS
         *********************************/
        addCartItem: function(newItemModel) {
            //TODO: Refactor
            var collection = this.collection,
                collectionItems = this.getItemNames(),
                model = newItemModel[0],
                colModel;
                
            if(_.contains(collectionItems, model.get('name'))){
                colModel = collection.filter(function(cModel){
                    if(cModel.get('name')===model.get('name')){
                        return cModel;
                    }
                })[0];
                colModel.set('quantity', (colModel.get('quantity')+model.get('quantity')));
            } else {
                this.collection.add(model);
            }
            this.$el.empty();
            this.render();
        }
    });
    
    return ShoppingCart.Views.Widgets.CartItemList = CartItemListView;
});