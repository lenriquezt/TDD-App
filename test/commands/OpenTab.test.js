const { expect, sinon } = require("../test-helper");
const { describe } = require("mocha");

const OpenTab = require("./../../src/commands/OpenTab");
const TabOpened = require("./../../src/events/Tab/TabOpened");

describe("Command OpenTab", () => {
  spy = sinon.spy();

  beforeEach(function () {
    uuidTest = 1;
    tableNumberTest = 2;
    waiterTest = "Derek";

    commandOpenTab = new OpenTab(uuidTest, tableNumberTest, waiterTest);
    commandOpenTab.addListener("OpenTab", spy);
  });

  afterEach(function () {
    spy.resetHistory();
  });

  describe("No event history for the tab", () => {
    it("should throw an event when OpenTab commandOpenTab is issued", () => {
      // Given

      // When
      commandOpenTab.execute();

      // Then
      sinon.assert.calledOnce(spy);
    });
    it("should call the callback with the correct arguments", () => {
      // Given

      // When
      commandOpenTab.execute();

      // Then
      sinon.assert.calledWith(spy, uuidTest, tableNumberTest, waiterTest);
    });
    it("should return a TabOpened event", () => {
      // Given

      // When
      eventProduced = commandOpenTab.execute();

      // Then
      expect(eventProduced).to.be.an.instanceof(TabOpened);
    });
    it("should return a TabOpened event with same commandOpenTab uuid", () => {
      // Given

      // When
      eventProduced = commandOpenTab.execute();

      // Then
      expect(eventProduced.uuid).to.equal(uuidTest);
    });
  });
});
