const Event = require('../Event');

class FoodPrepared extends Event{

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

}

module.exports = FoodPrepared;
