const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class MarkDrinksServed extends Command {
  constructor(uuid, items) {
    super(uuid, "MarkDrinksServed");
    this.items = items;
    this.addListener(
      this.commandName,
      Tab.HandleMarkDrinksServed
    );
  }

  execute() {
    this.emit(this.commandName, this.uuid, this.items);
    this.eventProduced = Tab.getEventProduced()
    return this.eventProduced;
  }
}

module.exports = MarkDrinksServed;
