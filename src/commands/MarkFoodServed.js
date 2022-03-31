const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class MarkFoodServed extends Command {
  constructor(uuid, items) {
    super(uuid, "MarkFoodServed");
    this.items = items;
    this.addListener(
      this.commandName,
      new Tab(this.eventProduced).HandleMarkFoodServed
    );
  }

  execute() {
    this.emit(this.commandName, this.uuid, this.items);

    return this.eventProduced;
  }
}

module.exports = MarkFoodServed;
