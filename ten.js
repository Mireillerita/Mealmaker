//Meal Maker
const menu = {};

_meal = '',

_price = 0,

menu.meal = 42;  
menu._price = 'ten thausand frw'; 
console.log(menu);

Object.defineProperty(menu, 'meal', {
    set: function(mealToCheck) {
      
      if (typeof mealToCheck === 'string') {
        
        this._meal = mealToCheck;
      }
    }
  });

 Object.defineProperty(menu, 'price', {
    set: function(priceToCheck) {
      
      if (typeof priceToCheck === 'number') {
       
        this._price = priceToCheck;
      }
    }
  });
  menu.meal = 'Today\'s Special';  
  menu.price = 5000; 

  Object.defineProperty(menu, 'todaysSpecial', {
    get: function() {
     
      if (this._meal && this._price) {
        
        return `Today's Special is ${this._meal} for ${this._price.toFixed(2)}!`;
      } else {
       
        return 'Meal or price was not set correctly!';
      }
    }
  });

  console.log(menu.todaysSpecial);