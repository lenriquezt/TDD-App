
const TabOpened = require('./../events/TabOpened');

class Tab {
    
    constructor( ) {}

    Open( e ){
        return new TabOpened( e.Uuid, e.TableNumber, e.Waiter );
    }

}

module.exports = Tab;
