const Event = require('./Event');

class TabClosed extends Event{
  
  constructor( Uuid, amountpaid, ordervalue, tipvalue ) {
    super( Uuid );
    this.AmountPaid = amountpaid;
    this.OrderValue = ordervalue;
    this.TipValue = tipvalue;
  }

}

module.exports = TabClosed;
