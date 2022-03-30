const EventEmitter = require('events')

class Command extends EventEmitter {
    
    constructor( uuid ) {
        super();
        this.Uuid = uuid;
    }

}

module.exports = Command;
