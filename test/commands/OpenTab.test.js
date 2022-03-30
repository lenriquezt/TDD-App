const { expect , sinon } = require('../test-helper');
const {describe} = require("mocha");

const OpenTab = require('./../../src/commands/OpenTab');

describe('Command OpenTab', () => {
    describe('No event history for the tab', () => {
        
        beforeEach( function() {
            spy = sinon.spy();
            cmd = new OpenTab( 1, 2, "Derek" );
            cmd.on('OpenTab', spy );
        });

        it('should throw a TabOpened event when OpenTab command is issued', () => {
            // Given 
            
            // When
            cmd.execute();
            
            // Then
            sinon.assert.calledOnce( spy );

        });
    });
});
