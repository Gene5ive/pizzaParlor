function Customer(name) {
  this.name = name;
  this.pizzaQuantity = null;
};

Customer.prototype.pizza = function(quantity) {
  this.pizzaQuantity = quantity;
  return (this.pizzaQuantity + ' pizzas for ' + this.name);
};
