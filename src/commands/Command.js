const EventEmitter = require('events')

class Command extends EventEmitter {
    
    constructor( uuid, commandName ) {
        super();
        this.uuid = uuid;
        this.commandName = commandName;
        this.eventProduced = null;
    }

}

module.exports = Command;
