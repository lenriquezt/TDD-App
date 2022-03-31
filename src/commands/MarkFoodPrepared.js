const Command = require('./Command');

class MarkFoodPrepared extends Command {

    constructor( id, items ) {
        super( id );
        this.items = items;
    }

    execute() {
        this.emit( );
    }

}

module.exports = MarkFoodPrepared;
