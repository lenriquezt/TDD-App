const Event = require('../Event');

class DrinksServed extends Event{

    constructor( uuid, items ) {
        super( uuid );
        this.items = items;
    }

}

module.exports = DrinksServed;
