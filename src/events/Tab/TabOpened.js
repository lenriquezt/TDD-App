const Event = require('../Event');

class TabOpened extends Event{
  
  constructor( uuid, tableNumber, waiter) {
    super( uuid );
    this.tableNumber = tableNumber;
    this.Waiter = waiter;
  }

}

module.exports = TabOpened;
