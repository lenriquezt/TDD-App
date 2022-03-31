const Event = require("../Event");

class FoodOrdered extends Event {
  constructor(id, items) {
    super(id);
    this.items = items;
  }
}

module.exports = FoodOrdered;
