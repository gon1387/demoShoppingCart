define(['jquery', 
        'underscore', 
        'backbone'], 
function($, _, Backbone){
    'use strict';
    var CartItem = Backbone.Model.extend({
        defaults: {
                name: 'n/a',
                quantity: 0,
                price: 0
        },
        validate: function(attr){
            if (!_.isString(attr.name)) {
                return 'CartItem.name should be a string';
            }
            
            if (!_.isNumber(attr.quantity)) {
                return 'CartItem.name should be a number';
            }
            
            if (!_.isNumber(attr.price)) {
                return 'CartItem.price should be a number';
            }
        }
    });
    
    return CartItem;
});