const TabOpened = require('./../events/Tab/TabOpened');

class Tab {
    
    constructor( ) {}

    Open( e ){
        return new TabOpened( e.Uuid, e.TableNumber, e.Waiter );
    }

    Open({});
}

module.exports = Tab;
