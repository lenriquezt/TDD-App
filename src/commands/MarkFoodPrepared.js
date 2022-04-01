const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class MarkFoodPrepared extends Command {
  constructor(uuid, items) {
    super(uuid, "MarkFoodPrepared");
    this.items = items;
    this.addListener(
      this.commandName,
      Tab.HandleMarkFoodPrepared
    );
  }

  execute() {
    this.emit(this.commandName, this.uuid, this.items);
    this.eventProduced = Tab.getEventProduced()
    return this.eventProduced;
  }
}

module.exports = MarkFoodPrepared;
