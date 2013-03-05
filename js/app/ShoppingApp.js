define(function(require, exports, module) {
    'use strict';
    
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
        
    var CartItemsCollection = require('collections/CartItems'),
        ShopItemCollection = require('collections/ShopItems'),
        ShopView = require('views/pages/Shop');
    
    var colData = [
        {name: 'Item 1', quantity: 0, price: 3},
        {name: 'Item 2', quantity: 3, price: 33.3},
        {name: 'Item 3', quantity: 42, price: 747.22},
        {name: 'Item 5', quantity: 2, price: 343.3},
        {name: 'Item 10', quantity: 123, price: 443.34}
    ];
    var colData2 = [
        {name: 'Item 1', description: "Lorem Ipsum Dolor Sit Amet", price: 3},
        {name: 'Item 2', description: "Lorem Ipsum Dolor Sit Amet", price: 33.3},
        {name: 'Item 3', description: "Lorem Ipsum Dolor Sit Amet", price: 747.22},
        {name: 'Item 5', description: "Lorem Ipsum Dolor Sit Amet", price: 343.3},
        {name: 'Item 11', description: "Lorem Ipsum Dolor Sit Amet", price: 443.34}
    ];
    
    
    var newCol = new CartItemsCollection(colData);
    var newCol2 = new ShopItemCollection(colData2);
    
    //var rack = new ShoppingRackView({collection: newCol2});
    //var cart = new ShoppingCartView({collection: newCol});
    
    var shop =  new ShopView({
        cartItemsCollection: newCol,
        shopItemsCollection: newCol2
    });
    
});