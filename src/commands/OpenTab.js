const Command = require('./Command');

class OpenTab extends Command {

    constructor( id, tableNumber, waiter ) {
        super( id );
        this.tableNumber = tableNumber;
        this.waiter = waiter;
    }

    execute() {
        this.emit( );
    }

}

module.exports = OpenTab;
