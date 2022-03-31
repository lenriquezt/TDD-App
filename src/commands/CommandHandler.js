const TabOpened = require('./../events/Tab/TabOpened');
const TabNotOpen = require("../exceptions");

class CommandHandler {

    constructor( eventReturn ) {
        this.eventReturn = eventReturn;
    }

    HandleOpenTab( uuid, tableNumber, waiter ){
        this.eventReturn = new TabOpened( uuid, tableNumber, waiter );
    }

    HandlePlaceOrder(){
        this.eventReturn = new TabNotOpen();
    }
}

module.exports = CommandHandler;
