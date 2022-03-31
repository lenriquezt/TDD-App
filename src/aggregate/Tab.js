const TabOpened = require('../events/Tab/TabOpened');
const DrinksServed = require('../events/Order/DrinksServed');
const TabNotOpen = require("../exceptions");

class Tab {

    

    constructor( eventProduced ) {
        this.eventProduced = eventProduced;
        this.open = false;
    }

    HandleOpenTab( uuid, tableNumber, waiter ){
        this.eventProduced = new TabOpened( uuid, tableNumber, waiter );
    }

    HandleMarkDrinksServed( uuid, item ){
        this.eventProduced = new DrinksServed( uuid, item );
    }

    HandlePlaceOrder(){
        if ( !this.open ){
            throw new TabNotOpen()
        }
    }
}

module.exports = Tab;
