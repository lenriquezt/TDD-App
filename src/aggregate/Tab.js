const TabOpened = require('../events/Tab/TabOpened');
const TabNotOpen = require("../exceptions");

class Tab {

    

    constructor( eventProduced ) {
        this.eventProduced = eventProduced;
        this.open = false;
    }

    HandleOpenTab( uuid, tableNumber, waiter ){
        this.eventProduced = new TabOpened( uuid, tableNumber, waiter );
    }

    HandlePlaceOrder(){
        if ( !this.open ){
            throw new TabNotOpen()
        }
    }
}

module.exports = Tab;
