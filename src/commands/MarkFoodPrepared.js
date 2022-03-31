const Command = require('./Command');
const Tab = require('../aggregate/Tab')

class MarkFoodPrepared extends Command {

    constructor( uuid, items ) {
        super( uuid , 'MarkFoodPrepared' );
        this.items = items;
        this.addListener( this.commandName, new Tab( this.eventProduced ).HandleMarkFoodPrepared )
    }

    execute() {
        this.emit( this.commandName , this.uuid, this.items );

        return this.eventProduced;
    }

}

module.exports = MarkFoodPrepared;
