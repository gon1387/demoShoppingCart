define(function(require, exports, module){
    'use strict';
    
    var ShopItemModel = require('models/ShopItem'),
        _ = require('underscore'),
        ShopItem;
    
    describe('Shop Item Model Test', function(){
        /*
         * Delete the created ShopItemModel on each spec
         */
        afterEach(function(){
            ShopItem = null;
        });
        
        describe('Default Value Test', function(){
            beforeEach(function(){
                ShopItem = new ShopItemModel();
            });
        
            it('Should have default values when an instance\'s created', function(){
                expect(ShopItem.attributes).toBeDefined();
                expect(ShopItem.attributes.length).not.toEqual(0);
                
                expect(ShopItem.get('name')).toBe('n/a');
                expect(ShopItem.get('description')).toBe('n/a');
                expect(ShopItem.get('price')).toBe(0);
                expect(ShopItem.get('category')).toBeEmptyString();
            });
            
        // END DESCRIBE
        });
        
        describe('Value Setting Test', function(){
            
            describe('Presetting Value Test', function(){
                beforeEach(function(){
                    ShopItem = new ShopItemModel({
                        name: 'Nike',
                        description: 'Some Nike description',
                        price: 200.15,
                        category: 'Shoes'
                    });
                });
                it('Should accept initial values on instantiation', function(){
                    expect(ShopItem.get('name')).toBe('Nike');
                    expect(ShopItem.get('description')).toBe('Some Nike description');
                    expect(ShopItem.get('price')).toBe(200.15);
                    expect(ShopItem.get('category')).toBe('Shoes');
                });
            //END DESCRIBE
            });
            
            describe('Postsetting Value Test', function(){
                beforeEach(function(){
                    ShopItem = new ShopItemModel();
                });
                
                it('Should accept post setting of value', function(){
                    ShopItem.set({
                        name: 'Nike',
                        description: 'Some Nike description',
                        price: 200.15,
                        category: 'Shoes'
                    });
                    
                    expect(ShopItem.get('name')).toBe('Nike');
                    expect(ShopItem.get('description')).toBe('Some Nike description');
                    expect(ShopItem.get('price')).toBe(200.15);
                    expect(ShopItem.get('category')).toBe('Shoes');
                });
            //END DESCRIBE
            });
            
            describe('Validation Test', function(){
                beforeEach(function(){
                    ShopItem = new ShopItemModel();
                });
                
                it('Should validate the attributes when added with set', function(){
                    var setValue = {
                            name: 'Nike',
                            description: 'Some Nike description',
                            price: 200.15,
                            category: 'Shoes'
                        };
                    expect(ShopItem.validate).toBeFunction();
                    
                    spyOn(ShopItem, 'validate').andCallThrough();
                    ShopItem.set(setValue, {validate: true});
                    
                    expect(ShopItem.validate).toHaveBeenCalled();
                    /*
                     * Any value passed on set will be extended with the default
                     * value of the model. So adding any unset attributes which
                     * has a default value should be included in the
                     * Spy's toHaveBeenCalledWith method
                     */
                    expect(ShopItem.validate).toHaveBeenCalledWith(
                        _.extend({},ShopItem.attributes, setValue), 
                        {validate: true});
                    expect(ShopItem.validate.calls.length).toEqual(1);
                });
                
                it('Should throw an error on validation error', function(){
                    var invalidSpy = jasmine.createSpy('- Invalid Value Spy -');
                    
                    ShopItem.on('invalid', invalidSpy);
                    
                    ShopItem.set('name', 5, {validate: true});
                    expect(invalidSpy).toHaveBeenCalled();
                    expect(invalidSpy.calls.length).toBe(1);
                    expect(ShopItem.validationError).toBe('ShopItem.name should be a string');
                    
                    ShopItem.set('description', 5, {validate: true});
                    expect(invalidSpy).toHaveBeenCalled();
                    expect(invalidSpy.calls.length).toBe(2);
                    expect(ShopItem.validationError).toBe('ShopItem.description should be a string');
                    
                    ShopItem.set('price', 'Some String', {validate: true});
                    expect(invalidSpy).toHaveBeenCalled();
                    expect(invalidSpy.calls.length).toBe(3);
                    expect(ShopItem.validationError).toBe('ShopItem.price should be a number');
                    
                    ShopItem.set('category', 5, {validate: true});
                    expect(invalidSpy).toHaveBeenCalled();
                    expect(invalidSpy.calls.length).toBe(4);
                    expect(ShopItem.validationError).toBe('ShopItem.category should be a string');
                    
                });
            });
        // END DESCRIBE
        });
    // END DESCRIBE
    });
});