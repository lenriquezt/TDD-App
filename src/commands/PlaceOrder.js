const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class PlaceOrder extends Command {
  constructor(id, items) {
    super(id, "PlaceOrder");
    this.items = items;
    this.addListener(
      this.commandName,
      Tab.HandlePlaceOrder
    );
  }

  execute() {
    this.emit(this.commandName, this.id, this.items);
    this.eventProduced = Tab.getEventProduced()
    return this.eventProduced;
  }
}

module.exports = PlaceOrder;
