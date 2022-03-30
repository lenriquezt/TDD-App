const Command = require('./Command');

class MarkDrinksServed extends Command {

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

    execute() {
        this.emit( );
    }

}

module.exports = MarkDrinksServed;
