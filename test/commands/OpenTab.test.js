const { expect } = require('../test-helper');
const {describe} = require("mocha");

const Tab = require('./../../src/aggregate/Tab');
const OpenTab = require('./../../src/commands/OpenTab');
const TabOpened = require('./../../src/events/Tab/TabOpened');


describe('Command OpenTab', () => {
    describe('No event history for the tab', () => {
        it('should produce TabOpened event when OpenTab command is issued', () => {
            // Given
            let tab = new Tab()
            
            // When
            let cmd = new OpenTab(2, 30, "Derek")
            const event = tab.Open( cmd )
    
            // Then
            expect( event ).to.be.an.instanceof( TabOpened );

        });
    });
});
