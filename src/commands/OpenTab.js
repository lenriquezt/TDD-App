const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class OpenTab extends Command {
  constructor(uuid, tableNumber, waiter) {
    super(uuid, "OpenTab");
    this.tableNumber = tableNumber;
    this.waiter = waiter;
    this.addListener(
      this.commandName,
      Tab.HandleOpenTab
    );
  }

  execute() {
    this.emit(this.commandName, this.uuid, this.tableNumber, this.waiter);
    this.eventProduced = Tab.getEventProduced()
    return this.eventProduced;
  }
}

module.exports = OpenTab;
