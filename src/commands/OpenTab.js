const Command = require('./Command');

class OpenTab extends Command {

    constructor( id, tablenumber, waiter ) {
        super( id );
        this.TableNumber = tablenumber;
        this.Waiter = waiter;
    }
  
}

module.exports = OpenTab;
