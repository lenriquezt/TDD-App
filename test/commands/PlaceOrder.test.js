const { expect } = require('../test-helper');
const {describe} = require("mocha");

const PlaceOrder = require('./../../src/commands/PlaceOrder');
const TabNotOpen = require("../../src/exceptions");


describe('Command PlaceOrder', () => {
    describe('no tab opened', () => {
        it('should throw a TabNotOpen error when PlaceOrder command is issued ', () => {
            expect(() => new PlaceOrder(1, Array())).to.throw(TabNotOpen);
        });
    });
});
