const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");

describe("vending machine", () => {
  // it("should be there", () => {
  //   expect(VendingMachine).isDefined();
  //   expect(typeof VendingMachine).toBe("function");
  // });

  it("should accept valid coins", () => {
    // Setup
    const machine = VendingMachine();
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });
    expect(machine.balance).to.equal(500); // Use an ES6 getter

    machine.insertCoin(660);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 1,
      50: 1,
      100: 1,
      500: 2,
    });
    expect(machine.balance).to.equal(1160); // Use an ES6 getter
  });
});
