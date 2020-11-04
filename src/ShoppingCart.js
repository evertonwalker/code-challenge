"use strict";
module.exports = function (items) {


  function calcule(item, discountValue, divisonLoyalty) {

    return { 
      discount : item.price * discountValue,
      loyaltyPoints: Math.floor(item.price / divisonLoyalty) 
    }

  }

  function checkout() {
    var totalPrice = 0;
    var loyaltyPoints = 0;
    items.forEach(function(item) {
   
      // if(item.productCode.startsWith("DIS_10")){
      //   discount = item.price * 0.1;
      //   loyaltyPoints += (item.price / 10);
      // } else if (item.productCode.startsWith("DIS_20")) {
      //   discount = calcule
      //   loyaltyPoints += Math.floor((item.price / 20));
      // } else if(item.productCode.startsWith("DIS_15")){
      //   discount = item.price * 0.15;
      //   loyaltyPoints += (item.price / 15);
      // } else {
      //   loyaltyPoints += (item.price / 5);
      // }

      let { discount, loyaltyPointsReturned } = calcule(item, 0.2, 20);

      totalPrice += item.price - discount;
      loyaltyPoints = loyaltyPointsReturned;

    });
    return { totalPrice: totalPrice, loyaltyPoints };
  }

  return {
    checkout: checkout
  }

  // function calcule(item, descount, baseLoyaltyPoints){
    
  //   let discount = item.price * descount;
  //   let loyaltyPoints = Math.floor((item.price / baseLoyaltyPoints));

  //   return { discount, loyaltyPoints }
  // }

  // function checkout() {
  //   var totalPrice = 0;
  //   var totalPoints = 0;
  //   items.forEach(function (item) {
  //     const mappedPromotions = {
  //       "COMPRE_1_LEVE_2" : () => calcule(item, 0.50, 50)
  //     };

  //     let { discount, loyaltyPoints } = mappedPromotions[item.productCode](item);
      
  //     totalPrice += item.price - discount;
  //     totalPoints += loyaltyPoints;
  //   });
  //   return { totalPrice, totalPoints };
  // }

  // return {
  //   checkout
  // }
}
