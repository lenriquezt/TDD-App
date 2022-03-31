const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class PlaceOrder extends Command {
  constructor(id, items) {
    super(id, "PlaceOrder");
    this.items = items;
    this.addListener(
      this.commandName,
      new Tab(this.eventProduced).HandlePlaceOrder
    );
  }

  execute() {
    this.emit(this.commandName, this.id, this.items);
    return this.eventProduced;
  }
}

module.exports = PlaceOrder;
