function Customer(name) {
  this.name = name;
  this.pizzaQuantity = null;
  this.pizzaTopping = null;
  this.pizzaSize = null;
  this.pizzaPrice = '$';
};

Customer.prototype.pizza = function(quantity, topping, size) {
  this.pizzaQuantity = quantity;
  this.pizzaTopping = topping
  this.pizzaSize = size
  return (this.pizzaQuantity + ' ' + this.pizzaSize + '-inch ' + this.pizzaTopping + ' pizzas for ' + this.name);
};

Customer.prototype.price = function() {
  var total = (this.pizzaQuantity * this.pizzaSize);
  this.pizzaPrice += total;
  return ('$' + this.pizzaPrice);
};
