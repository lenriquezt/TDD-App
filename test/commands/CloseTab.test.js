const { expect , sinon } = require('../test-helper');
const {describe} = require("mocha");

const CloseTab = require('./../../src/commands/CloseTab');
const OpenTab = require('./../../src/commands/OpenTab');
const TabNotOpen = require("../../src/exceptions");
const TabClosed = require('../../src/events/Tab/TabClosed');

describe('Command CloseTab', () => {
    spy = sinon.spy();

    beforeEach( function() {
        uuidTest = 1
        amountPaidTest = 100

        commandCloseTab = new CloseTab( uuidTest, amountPaidTest );
        commandCloseTab.addListener( commandCloseTab.commandName, spy );
    });

    afterEach( function () {
        spy.resetHistory();
    });

    describe('when no tab is opened', () => {
        it('should throw a TabNotOpen error when CloseTab command is issued ', () => {
            expect(() => commandCloseTab.execute()).to.throw( TabNotOpen );
        });
    });

    describe('Tab has been opened', () => {
        it('should throw an event when commandCloseTab is issued', () => {
            // Given  
            commandOpenTab = new OpenTab( 10, 20, "Derek" );
            eventProduced = commandOpenTab.execute( );
            
            // When
            commandCloseTab.execute( );
            
            // Then
            sinon.assert.calledOnce( spy );
        });
        it('should return a TabClosed event', () => {
            // Given 
            commandOpenTab = new OpenTab( 10, 20, "Derek" );
            eventProduced = commandOpenTab.execute( );

            // When
            eventProduced = commandCloseTab.execute( );
            
            // Then
            expect( eventProduced ).to.be.an.instanceof( TabClosed );
        });
    });
});
