const { expect , sinon } = require('../test-helper');
const {describe} = require("mocha");

const MarkDrinksServed = require('./../../src/commands/MarkDrinksServed');
const DrinksServed = require('./../../src/events/Order/DrinksServed');

describe('Command MarkDrinksServed', () => {
    spy = sinon.spy();

    beforeEach( function() {
        uuidTest = 1
        drinkTest = "Drink_1"

        commandMarkDrinksServed = new MarkDrinksServed(uuidTest, drinkTest );
        commandMarkDrinksServed.addListener( 'MarkDrinksServed', spy );
    });

    afterEach( function () {
        spy.resetHistory();
    });

    describe('No event history for the tab', () => {
        it('should throw an event when MarkDrinksServed commandMarkDrinksServed is issued', () => {
            // Given 
            
            // When
            commandMarkDrinksServed.execute( );
            
            // Then
            sinon.assert.calledOnce( spy );
        });
        it('should call the callback with the correct arguments', () => {
            // Given 
            
            // When
            commandMarkDrinksServed.execute( );
            
            // Then
            sinon.assert.calledWith( spy, uuidTest, drinkTest )
        });
        it('should return a DrinksServed event', () => {
            // Given 
            
            // When
            eventProduced = commandMarkDrinksServed.execute( );
            
            // Then
            expect( eventProduced ).to.be.an.instanceof( DrinksServed );
        });
        it('should return a DrinksServed event with same commandMarkDrinksServed uuid', () => {
            // Given 
            
            // When
            eventProduced = commandMarkDrinksServed.execute( );
            
            // Then
            expect( eventProduced.uuid ).to.equal( uuidTest );
        });
    });
});
