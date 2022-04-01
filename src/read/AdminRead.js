const Tab = require("../aggregate/Tab");

class AdminRead {
  
    read() {
      return Tab.getTableOuverte();
    }
  }
  
  module.exports = AdminRead;