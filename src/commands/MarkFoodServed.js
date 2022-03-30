const Command = require('./Command');

class MarkFoodServed extends Command {

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

    execute() {
        this.emit( );
    }

}

module.exports = MarkFoodServed;
