const Events = require("events");

const API = require("./API/Axios");

class BasePayPal extends API {
  constructor() {
    super();
    /**
     * Client details
     */
    this.clientId = null;
    this.clientSecret = null;
  }

  configure(id, secret) {
    this.clientId = id;
    this.clientSecret = secret;

    this.eventHandler = new Events.EventEmitter();
  }
}

module.exports = BasePayPal;
