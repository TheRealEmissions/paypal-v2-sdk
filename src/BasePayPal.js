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
    this.sandbox = false;
  }

  configure(id, secret, sandbox = false) {
    this.clientId = id;
    this.clientSecret = secret;
    this.sandbox = sandbox;

    this.eventHandler = new Events.EventEmitter();
  }
}

module.exports = BasePayPal;
