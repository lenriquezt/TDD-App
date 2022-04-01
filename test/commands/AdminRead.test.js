const { expect, sinon } = require("../test-helper");
const { describe } = require("mocha");

const OpenTab = require("./../../src/commands/OpenTab");
const AdminRead = require("./../../src/read/AdminRead");
const Tab = require("../../src/aggregate/Tab");
const { assert } = require("chai");

describe("Command CloseTab", () => {
    spy = sinon.spy();
  
    afterEach(function () {
      spy.resetHistory();
      Tab.reset();
    });
  
    
    it("should return all the opened Tab ", () => {
        // Given
        uuidTest = 1;
        tableNumberTest = 2;
        waiterTest = "Derek";
    
        commandOpenTab = new OpenTab(uuidTest, tableNumberTest, waiterTest);
        commandOpenTab.execute();

        // When
        adminReadTest = new AdminRead();
        tableOpened = adminReadTest.read();

        //Then
        tableOpenedExpected = [2];
        expect(tableOpened).to.deep.equal(tableOpenedExpected);

    });

    it("should return all the opened Tab ", () => {
        // Given    
        commandOpenTab = new OpenTab(1, 2, "Derek");
        commandOpenTab.execute();

        commandOpenTab = new OpenTab(2, 5, "Derek");
        commandOpenTab.execute();

        // When
        adminReadTest = new AdminRead();
        tableOpened = adminReadTest.read();

        //Then
        tableOpenedExpected = [2,5];
        expect(tableOpened).to.deep.equal(tableOpenedExpected);

    });

  });
  