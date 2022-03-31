const { expect , sinon } = require('../test-helper');
const {describe} = require("mocha");

const OpenTab = require('./../../src/commands/OpenTab');
const TabOpened = require('./../../src/events/Tab/TabOpened')

describe('Command OpenTab', () => {
    spy = sinon.spy();

    beforeEach( function() {
        uuidTest = 1
        tableNumberTest = 2
        waiterTest = "Derek"
        
        command = new OpenTab( uuidTest, tableNumberTest, waiterTest );
        command.addListener( 'OpenTab', spy );
    });

    afterEach( function () {
        spy.resetHistory();
    });

    describe('No event history for the tab', () => {
        it('should throw an event when OpenTab command is issued', () => {
            // Given 
            
            // When
            command.execute( );
            
            // Then
            sinon.assert.calledOnce( spy );
        });
        it('should call the callback with the correct arguments', () => {
            // Given 
            
            // When
            command.execute( );
            
            // Then
            sinon.assert.calledWith( spy, uuidTest, tableNumberTest, waiterTest )
        });
        it('should return a TabOpened event', () => {
            // Given 
            
            // When
            eventReturn = command.execute( );
            
            // Then
            expect( eventReturn ).to.be.an.instanceof( TabOpened );
        });
        it('should return a TabOpened event with same command uuid', () => {
            // Given 
            
            // When
            eventReturn = command.execute( );
            
            // Then
            expect( eventReturn.uuid ).to.equal( uuidTest );
        });
    });
});
