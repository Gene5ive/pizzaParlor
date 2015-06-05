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

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    var name = $("input#input-name").val();
    var customer = new Customer(name);
    $(".new-pizza").each(function() {
      var inputTopping = $(this).find("input.input-topping").val();
      var inputSize = $(this).find(parseInt("input.input-size")).val();
      var inputQuantity = $(this).find(parseInt("input.input-quantity")).val();
      var pizza = (inputQuantity, inputTopping, inputSize);
      var order = customer.pizza(pizza);
      var price = customer.price();
      $(".price").html('<h2>' + price + '</h2>');
    });
    debugger;
  });
});
