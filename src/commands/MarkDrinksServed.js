const Command = require('./Command');
const Tab = require('../aggregate/Tab')

class MarkDrinksServed extends Command {

    constructor( uuid, items ) {
        super( uuid , 'MarkDrinksServed' );
        this.items = items;
        this.eventProduced;
        this.addListener( this.commandName, new Tab( this.eventProduced ).HandleMarkDrinksServed )
    }

    execute() {
        this.emit( this.commandName , this.uuid, this.items );

        return this.eventProduced;
    }

}

module.exports = MarkDrinksServed;
