const Event = require('../Event');

class FoodServed extends Event{

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

}

module.exports = FoodServed;
