const Command = require('./Command');

class OpenTab extends Command {

    constructor( id, tableNumber, waiter ) {
        super( id );
        this.tableNumber = tableNumber;
        this.waiter = waiter;
    }
  
}

module.exports = OpenTab;
