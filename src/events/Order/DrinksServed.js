const Event = require('../Event');

class DrinksServed extends Event{

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

}

module.exports = DrinksServed;
