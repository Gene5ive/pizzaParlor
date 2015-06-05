describe("Customer", function() {
  it("initializes a new customer", function() {
    var john = new Customer("John");
    expect(john.name).to.equal("John");
  });

  describe("this.pizza", function() {
    it("Orders pizza for a customer", function() {
      var john = new Customer("John");
      expect(john.pizza(2, "cheese")).to.equal("2 cheese pizzas for John");
    });
  });
});
