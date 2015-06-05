function Customer(name) {
  this.name = name;
  this.pizzaQuantity = null;
  this.pizzaTopping = null;
};

Customer.prototype.pizza = function(quantity, topping) {
  this.pizzaQuantity = quantity;
  this.pizzaTopping = topping
  return (this.pizzaQuantity + ' ' + this.pizzaTopping + ' pizzas for ' + this.name);
};
