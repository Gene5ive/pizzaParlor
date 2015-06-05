describe("Customer", function() {
  it("initializes a new customer", function() {
    var john = new Customer("John");
    expect(john.name).to.equal("John");
  });

  describe("this.pizza", function() {
    it("Orders pizza for a customer", function() {
      var john = new Customer("John");
      expect(john.pizza(9, "cheese", 2)).to.equal("2 9-inch cheese pizzas");
    });
  });
});
