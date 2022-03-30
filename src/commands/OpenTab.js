const Command = require('./Command');

class OpenTab extends Command {

    constructor( uuid, tableNumber, waiter ) {
        super( uuid );
        this.tableNumber = tableNumber;
        this.waiter = waiter;
    }

    execute() {
        this.emit( );
    }

}

module.exports = OpenTab;
