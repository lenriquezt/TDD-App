const TabOpened = require("../events/Tab/TabOpened");
const DrinksServed = require("../events/Order/DrinksServed");
const FoodServed = require("../events/Order/FoodServed");
const TabNotOpen = require("../exceptions");
const TabClosed = require("../events/Tab/TabClosed");
const FoodOrdered = require("../events/Order/FoodOrdered");
const FoodPrepared = require("../events/Order/FoodPrepared");

class Tab {
  constructor(eventProduced) {
    this.eventProduced = eventProduced;
    this.open = false;
    this.servedItemsValue = 0;
  }

  HandleOpenTab(uuid, tableNumber, waiter) {
    this.eventProduced = new TabOpened(uuid, tableNumber, waiter);
  }

  HandlePlaceOrder() {
    if (!this.open) {
      throw new TabNotOpen();
    }
  }

  HandleMarkDrinksServed(uuid, item) {
    this.eventProduced = new DrinksServed(uuid, item);
  }

  HandleMarkFoodPrepared(uuid, item) {
    this.eventProduced = new FoodPrepared(uuid, item);
  }

  HandleMarkFoodServed(uuid, item) {
    this.eventProduced = new FoodServed(uuid, item);
  }

  HandleCloseTab(uuid, amountPaid) {
    if (!this.open) {
      throw new TabNotOpen();
    }

    this.eventProduced = new TabClosed(
      uuid,
      amountPaid,
      servedItemsValue,
      amountPaid - servedItemsValue
    );
  }
}

module.exports = Tab;
