const Event = require('./Event');

class TabOpened extends Event{
  
  constructor( id, tablenumber, waiter) {
    super( id );
    this.TableNumber = tablenumber;
    this.Waiter = waiter;
  }

}

module.exports = TabOpened;
