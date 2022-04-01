const TabOpened = require("../events/Tab/TabOpened");
const DrinksServed = require("../events/Order/DrinksServed");
const FoodServed = require("../events/Order/FoodServed");
const TabNotOpen = require("../exceptions");
const TabClosed = require('../events/Tab/TabClosed');
const FoodPrepared = require("../events/Order/FoodPrepared");

var Tab = (function() {
  var eventProduced = null;
  var open = false;
  var servedItemsValue = 0;

  tableOuverte = [];

  
  
  return {
    getEventProduced: function() {
      return eventProduced;
    },
    getTableOuverte: function() {
      return tableOuverte;
    },
    reset: function(){
      eventProduced = null;
      open = false;
      servedItemsValue = 0;
      tableOuverte = [];
    },
    HandleOpenTab: function (uuid, tableNumber, waiter) {
      open = true;
      eventProduced = new TabOpened( uuid, tableNumber, waiter );
      tableOuverte.push(tableNumber);
    },
    HandlePlaceOrder: function(){
      if (!open) {
        throw new TabNotOpen();
      }
    },
    HandleMarkDrinksServed: function(uuid, item) {
      eventProduced = new DrinksServed(uuid, item);
    },
    HandleMarkFoodPrepared: function(uuid, item) {
      eventProduced = new FoodPrepared(uuid, item);
    },
    HandleMarkFoodServed: function(uuid, item) {
      eventProduced = new FoodServed(uuid, item);
    },
    HandleCloseTab: function(uuid, amountPaid) {
      if (!open) {
        throw new TabNotOpen();
      }
      eventProduced = new TabClosed(
        uuid,
        amountPaid,
        servedItemsValue,
        amountPaid - servedItemsValue
      );
    }
  };
})();

module.exports = Tab;
