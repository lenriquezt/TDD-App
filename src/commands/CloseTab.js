const Command = require('./Command');

class CloseTab extends Command {

    constructor( id, amountPaid ) {
        super( id );
        this.amountPaid = amountPaid;
    }

    execute() {
        this.emit( );
    }

}

module.exports = CloseTab;
