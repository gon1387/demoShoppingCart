define(function(require, exports, module){
    'use strict';
    
    var CartItemModel = require('models/CartItem'),
        _ = require('underscore'),
        CartItem;
    
    describe('Cart Item Model Test', function(){
        /*
         * Delete the created CartItemModel on each spec
         */
        afterEach(function(){
            CartItem = null;
        });
        
        describe('Default Value Test', function(){
            beforeEach(function(){
                CartItem = new CartItemModel();
            });
        
            it('Should have default values when an instance\'s created', function(){
                expect(CartItem.attributes).toBeDefined();
                expect(CartItem.attributes.length).not.toEqual(0);
                
                expect(CartItem.get('name')).toBe('n/a');
                expect(CartItem.get('price')).toBe(0);
                expect(CartItem.get('quantity')).toBe(0);
            });
            
        // END DESCRIBE
        });
        
        describe('Value Setting Test', function(){
            
            describe('Presetting Value Test', function(){
                beforeEach(function(){
                    CartItem = new CartItemModel({
                        name: 'Item No.1',
                        quantity: 11,
                        price: 15.25
                    });
                });
                it('Should accept initial values on instantiation', function(){
                    expect(CartItem.get('name')).toBe('Item No.1');
                    expect(CartItem.get('quantity')).toBe(11);
                    expect(CartItem.get('price')).toBe(15.25);
                });
            //END DESCRIBE
            });
            
            describe('Postsetting Value Test', function(){
                beforeEach(function(){
                    CartItem = new CartItemModel();
                });
                
                it('Should accept post setting of value', function(){
                    CartItem.set({
                        name: 'Item No.1',
                        quantity: 11,
                        price: 15.25
                    });
                    
                    expect(CartItem.get('name')).toBe('Item No.1');
                    expect(CartItem.get('quantity')).toBe(11);
                    expect(CartItem.get('price')).toBe(15.25);
                });
            //END DESCRIBE
            });
            
            describe('Validation Test', function(){
                beforeEach(function(){
                    CartItem = new CartItemModel();
                });
                
                it('Should validate the attributes when added with set', function(){
                    var setValue = {
                            name: 'Item No.1',
                            quantity: 11,
                            price: 15.25
                        };
                    expect(CartItem.validate).toBeFunction();
                    
                    spyOn(CartItem, 'validate');
                    CartItem.set(setValue, {validate: true});
                    
                    expect(CartItem.validate).toHaveBeenCalled();
                    /*
                     * Any value passed on set will be extended with the default
                     * value of the model. So adding any unset attributes which
                     * has a default value should be included in the
                     * Spy's toHaveBeenCalledWith method
                     */
                    expect(CartItem.validate).toHaveBeenCalledWith(
                        _.extend({}, CartItem.attributes, setValue), 
                        {validate: true});
                    expect(CartItem.validate.calls.length).toEqual(1);
                });
                //TODO: Add unit test for failed validation
            });
        // END DESCRIBE
        });
    // END DESCRIBE
    });
});