const Command = require("./Command");
const Tab = require("../aggregate/Tab");

class CloseTab extends Command {
  constructor(uuid, amountPaid) {
    super(uuid, "CloseTab");
    this.amountPaid = amountPaid;
    this.addListener(
      this.commandName,
      Tab.HandleCloseTab
    );
  }

  execute() {
    this.emit(this.commandName, this.uuid, this.amountPaid);
    this.eventProduced = Tab.getEventProduced();
    return this.eventProduced;
  }
}

module.exports = CloseTab;
