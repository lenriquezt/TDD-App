const Event = require('./Event');

class DrinksOrdered extends Event{

    constructor( id, items ) {
        super( id );
        this.items = new Array();
    }

}

module.exports = DrinksOrdered;
