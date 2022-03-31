const Event = require("../Event");

class TabClosed extends Event {
  constructor(id, amountPaid, orderValue, tipValue) {
    super(id);
    this.amountPaid = amountPaid;
    this.orderValue = orderValue;
    this.tipValue = tipValue;
  }
}

module.exports = TabClosed;
