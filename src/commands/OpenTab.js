const Command = require('./Command');
const Tab = require('../aggregate/Tab')

class OpenTab extends Command {

    eventProduced;

    constructor( uuid, tableNumber, waiter ) {
        super( uuid , 'OpenTab');
        this.tableNumber = tableNumber;
        this.waiter = waiter;
        this.addListener( this.commandName, new Tab( this.eventProduced ).HandleOpenTab )
    }

    execute( ) {
        this.emit( this.commandName , this.uuid, this.tableNumber, this.waiter );
        
        return this.eventProduced;
    }

}

module.exports = OpenTab;
