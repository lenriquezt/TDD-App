const { expect, sinon } = require("../test-helper");
const { describe } = require("mocha");

const PlaceOrder = require("./../../src/commands/PlaceOrder");
const TabNotOpen = require("../../src/exceptions");
const OpenTab = require("./../../src/commands/OpenTab");
const Tab = require("../../src/aggregate/Tab");

describe("Command PlaceOrder", () => {
  spy = sinon.spy();

  beforeEach(function () {
    uuidTest = 1;
    items = ["Cola", "Pepsi"];

    commandPlaceOrder = new PlaceOrder(uuidTest, items);
    commandPlaceOrder.addListener("PlaceOrder", spy);
  });

  afterEach(function () {
    spy.resetHistory();
    Tab.reset();
  });

  describe("when no tab is opened", () => {
    it("should throw a TabNotOpen error when PlaceOrder command is issued ", () => {
      expect(() => new PlaceOrder(1, Array()).execute()).to.throw(TabNotOpen);
    });
  });
});
