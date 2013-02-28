define(function(require, exports, module) {
    'use strict';
    
    var CartItemModel = require('models/CartItem'),
        CartItemCollection = require('collections/CartItems'),
        CartItems;
        
    describe('Cart Item Collection Test', function(){
        afterEach(function(){
            CartItems = null;
        });
        
        describe('CRUD Test', function(){
            beforeEach(function(){
                CartItems = new CartItemCollection();
            })
            
            describe('Add Test', function(){
                it('Should be able to add new models',function(){
                    var M1 = new CartItemModel({
                            name: 'Item 1',
                            quantity: 14,
                            price: 20.25
                        });
                    CartItems.add(M1);
                    expect(CartItems.get(M1)).toBe(M1);
                });
                it('Should be able to throw an event on Add',function(){
                    var M1 = new CartItemModel({
                            name: 'Item 1',
                            quantity: 14,
                            price: 20.25
                        }),
                        addSpy = jasmine.createSpy('- Add Spy -');
                    CartItems.on('add',addSpy);
                    CartItems.add(M1);
                    expect(addSpy).toHaveBeenCalled();
                });
            // END DESCRIBE
            });
        // END DESCRIBE
        });
    // END DESCRIBE
    });
});