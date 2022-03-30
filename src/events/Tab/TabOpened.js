const Event = require('../Event');

class TabOpened extends Event{
  
  constructor( id, tableNumber, waiter) {
    super( id );
    this.tableNumber = tableNumber;
    this.Waiter = waiter;
  }

}

module.exports = TabOpened;
