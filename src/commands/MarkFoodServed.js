const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class MarkFoodServed extends Command {
  constructor(uuid, items) {
    super(uuid, "MarkFoodServed");
    this.items = items;
    this.addListener(
      this.commandName,
      Tab.HandleMarkFoodServed
    );
  }

  execute() {
    this.emit(this.commandName, this.uuid, this.items);
    this.eventProduced = Tab.getEventProduced()
    return this.eventProduced;
  }
}

module.exports = MarkFoodServed;
