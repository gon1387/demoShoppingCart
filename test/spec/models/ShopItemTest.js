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
                //TODO: Add unit test for failed validation
            });
        // END DESCRIBE
        });
    // END DESCRIBE
    });
});