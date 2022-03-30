const Event = require('./Event');

class FoodOrdered extends Event{

    constructor( id, items ) {
        super( id );
        this.items = new Array();
    }

}

module.exports = FoodOrdered;
