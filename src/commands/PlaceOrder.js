const Command = require('./Command');
const CommandHandler = require("./CommandHandler");

class PlaceOrder extends Command {

    eventReturn;

    constructor( id, items ) {
        super( id );
        this.items = items;
        this.addListener( this.commandName, new CommandHandler( this.eventReturn ).HandlePlaceOrder )
    }

    execute( ) {
        this.emit( this.commandName , this.id, this.items);
        return this.eventReturn;
    }


}

module.exports = PlaceOrder;
