const Command = require('./Command');

class PlaceOrder extends Command {

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

}

module.exports = PlaceOrder;
