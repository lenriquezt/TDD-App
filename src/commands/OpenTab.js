const Command = require('./Command');
const TabOpened = require('./../events/Tab/TabOpened')

const CommandHandler = require('./CommandHandler')

class OpenTab extends Command {

    eventReturn;

    constructor( uuid, tableNumber, waiter ) {
        super( uuid , 'OpenTab');
        this.tableNumber = tableNumber;
        this.waiter = waiter;
        this.addListener( this.commandName, new CommandHandler( this.eventReturn ).HandleOpenTab )
    }

    execute( ) {
        this.emit( this.commandName , this.uuid, this.tableNumber, this.waiter );
        
        return this.eventReturn;
    }

}

module.exports = OpenTab;
