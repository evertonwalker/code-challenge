var ShoppingCart = require('../src/ShoppingCart.js')

describe('should run the app', function () {

  it('gets the price right with DIS_10', function () {
    var item = { name: "foo", price: "10", productCode: "DIS_10" }
    var shoppingCart = new ShoppingCart([item]);
    var results = shoppingCart.checkout();
    expect(results.totalPrice).toEqual(9);
  });

  it('get the loyaltyPoints points', () => {
    var item = { name: "foo", price: "10", productCode: "DIS_10" }
    var shoppingCart = new ShoppingCart([item]);
    var results = shoppingCart.checkout();
    expect(results.loyaltyPoints).toEqual(1);
  });

  it('get the price right with DIS_20', () => {

    var item = { name: "carrinho", price: "20", productCode: "DIS_20"};
    var shoppingCart = new ShoppingCart([item]);
    var results = shoppingCart.checkout();
    expect(results.totalPrice).toEqual(16);

  });


  it('get the loyalty points with DIS_20 and price 80', () => {
    var item = { name: "carrinho", price: "80", productCode: "DIS_20"};
    var shoppingCart = new ShoppingCart([item]);
    var results = shoppingCart.checkout();
    expect(results.loyaltyPoints).toEqual(4);
  });

  it('get the loyalty points with DIS_20 and price 75', () => {
    var item = { name: "carrinho", price: "75", productCode: "DIS_20"};
    var shoppingCart = new ShoppingCart([item]);
    var results = shoppingCart.checkout();
    expect(results.loyaltyPoints).toEqual(3);
  });

  // it('gets the price right with DIS_20', function() {
  //   var item = {name: "foo", price: 20, productCode: "DIS_20"}
  //   var shoppingCart = new ShoppingCart([item]);
  //   var results = shoppingCart.checkout();
  //   expect(results.totalPrice).toEqual(16);
  // });

  // it('get the loyaltyPoints with DIS_20 with price 40', () => {
  //   var item = {name: "foo", price: "40", productCode: "DIS_20"}
  //   var shoppingCart = new ShoppingCart([item]);
  //   var results = shoppingCart.checkout();
  //   expect(results.loyaltyPoints).toEqual(2);
  // });

  // it('get the loyaltyPoints with DIS_20 with price 19', () => {
  //   var item = {name: "foo", price: "19", productCode: "DIS_20"}
  //   var shoppingCart = new ShoppingCart([item]);
  //   var results = shoppingCart.checkout();
  //   expect(results.loyaltyPoints).toEqual(0);
  // });

  // it('get the loyaltyPoints with DIS_20 with price 35', () => {
  //   var item = {name: "foo", price: "35", productCode: "DIS_20"}
  //   var shoppingCart = new ShoppingCart([item]);
  //   var results = shoppingCart.checkout();
  //   expect(results.loyaltyPoints).toEqual(1);
  // });

  // it('get promotion with productCode COMPRE_1_LEVE_2', () => {
  //   var item = {name: "foo", price: "70", productCode: "COMPRE_1_LEVE_2"}
  //   var shoppingCart = new ShoppingCart([item]);
  //   var results = shoppingCart.checkout();
  //   expect(results.totalPrice).toEqual(35);
  // });

});
