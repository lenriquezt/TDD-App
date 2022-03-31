const TabOpened = require('./../events/Tab/TabOpened');

class CommandHandler {

    constructor( eventReturn ) {
        this.eventReturn = eventReturn;
    }

    HandleOpenTab( uuid, tableNumber, waiter ){
        this.eventReturn = new TabOpened( uuid, tableNumber, waiter );
    }
}

module.exports = CommandHandler;
