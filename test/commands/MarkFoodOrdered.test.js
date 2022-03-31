const { expect , sinon } = require('../test-helper');
const {describe} = require("mocha");

const MarkFoodPrepared = require('./../../src/commands/MarkFoodPrepared');
const FoodPrepared = require('./../../src/events/Order/FoodPrepared');

describe('Command MarkFoodPrepared', () => {
    spy = sinon.spy();

    beforeEach( function() {
        uuidTest = 1
        foodTest = "Food_1"

        commandMarkFoodPrepared = new MarkFoodPrepared(uuidTest, foodTest );
        commandMarkFoodPrepared.addListener( 'MarkFoodPrepared', spy );
    });

    afterEach( function () {
        spy.resetHistory();
    });

    describe('No event history for the tab', () => {
        it('should throw an event when MarkFoodPrepared commandMarkFoodPrepared is issued', () => {
            // Given 
            
            // When
            commandMarkFoodPrepared.execute( );
            
            // Then
            sinon.assert.calledOnce( spy );
        });
        it('should call the callback with the correct arguments', () => {
            // Given 
            
            // When
            commandMarkFoodPrepared.execute( );
            
            // Then
            sinon.assert.calledWith( spy, uuidTest, foodTest )
        });
        it('should return a FoodPrepared event', () => {
            // Given 
            
            // When
            eventProduced = commandMarkFoodPrepared.execute( );
            
            // Then
            expect( eventProduced ).to.be.an.instanceof( FoodPrepared );
        });
        it('should return a FoodPrepared event with same commandMarkFoodPrepared uuid', () => {
            // Given 
            
            // When
            eventProduced = commandMarkFoodPrepared.execute( );
            
            // Then
            expect( eventProduced.uuid ).to.equal( uuidTest );
        });
    });
});
