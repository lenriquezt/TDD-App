const { expect, sinon } = require("../test-helper");
const { describe } = require("mocha");

const MarkFoodServed = require("./../../src/commands/MarkFoodServed");
const FoodServed = require("./../../src/events/Order/FoodServed");
const Tab = require("../../src/aggregate/Tab");

describe("Command MarkFoodServed", () => {
  spy = sinon.spy();

  beforeEach(function () {
    uuidTest = 1;
    foodTest = "Food_1";

    commandMarkFoodServed = new MarkFoodServed(uuidTest, foodTest);
    commandMarkFoodServed.addListener("MarkFoodServed", spy);
  });

  afterEach(function () {
    spy.resetHistory();
    Tab.reset();
  });

  describe("No event history for the tab", () => {
    it("should throw an event when MarkFoodServed commandMarkFoodServed is issued", () => {
      // Given

      // When
      commandMarkFoodServed.execute();

      // Then
      sinon.assert.calledOnce(spy);
    });
    it("should call the callback with the correct arguments", () => {
      // Given

      // When
      commandMarkFoodServed.execute();

      // Then
      sinon.assert.calledWith(spy, uuidTest, foodTest);
    });
    it("should return a FoodServed event", () => {
      // Given

      // When
      eventProduced = commandMarkFoodServed.execute();

      // Then
      expect(eventProduced).to.be.an.instanceof(FoodServed);
    });
    it("should return a FoodServed event with same commandMarkFoodServed uuid", () => {
      // Given

      // When
      eventProduced = commandMarkFoodServed.execute();

      // Then
      expect(eventProduced.uuid).to.equal(uuidTest);
    });
  });
});
