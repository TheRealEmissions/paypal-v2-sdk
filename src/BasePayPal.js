class BasePayPal {
  constructor() {
    /**
     * Client details
     */
    this.clientId = null;
    this.clientSecret = null;
  }

  configure(id, secret) {
    this.clientId = id;
    this.clientSecret = secret;
  }
}

module.exports = BasePayPal;
