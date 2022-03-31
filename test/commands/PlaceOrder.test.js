const { expect, sinon} = require('../test-helper');
const {describe} = require("mocha");

const PlaceOrder = require('./../../src/commands/PlaceOrder');
const TabNotOpen = require("../../src/exceptions");
const OpenTab = require("./../../src/commands/OpenTab");

describe('Command PlaceOrder', () => {

    spy = sinon.spy();

    beforeEach( function() {
        uuidTest = 1
        items = ["Cola", "Pepsi"]


        commandPlaceOrder = new PlaceOrder(uuidTest, items);
        commandPlaceOrder.addListener( 'PlaceOrder', spy );
    });

    afterEach( function () {
        spy.resetHistory();
    });

    describe('when no tab is opened', () => {
        it('should throw an event when PlaceOrder is issued', () => {
            // Given

            // When
            commandPlaceOrder.execute( );

            // Then
            sinon.assert.calledOnce( spy );
        });
    });
});
