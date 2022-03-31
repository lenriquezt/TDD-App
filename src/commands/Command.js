const EventEmitter = require('events')

class Command extends EventEmitter {
    
    constructor( uuid, commandName ) {
        super();
        this.uuid = uuid;
        this.commandName = commandName
    }

}

module.exports = Command;
