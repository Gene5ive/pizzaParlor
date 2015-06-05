function Customer(name) {
  this.name = name;
  this.pizzaQuantity = null;
  this.pizzaTopping = null;
  this.pizzaSize = null;
};

Customer.prototype.pizza = function(quantity, topping, size) {
  this.pizzaQuantity = quantity;
  this.pizzaTopping = topping
  this.pizzaSize = size
  return (this.pizzaQuantity + ' ' + this.pizzaSize + '-inch ' + this.pizzaTopping + ' pizzas for ' + this.name);
};
