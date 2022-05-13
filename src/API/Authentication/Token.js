const Axios = require("axios").default;
const PayPalClass = require("../../PayPal");

class Token {
  /**
   *
   * @param {PayPalClass} PayPal
   */
  constructor(PayPal) {
    this.PayPal = PayPal;
  }

  async requestNewToken(clientId, clientSecret, sandbox) {
    const response = await Axios.post(
      `https://${sandbox ? "api-m.sandbox" : "api"}.paypal.com/v1/oauth2/token`,
      "grant_type=client_credentials",
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        auth: {
          username: clientId,
          password: clientSecret,
        },
        data: {
          grant_type: "client_credentials",
        },
        responseType: "json",
      }
    );

    this.PayPal.eventHandler.emit(
      "debug",
      "Response from new token request: " + JSON.stringify(response.data)
    );

    this.setAccessToken(response.data.access_token)
      .setAppId(response.data.app_id)
      .setExpiry(response.data.expires_in)
      .setNonce(response.data.nonce)
      .setScope(response.data.scope)
      .setTokenType(response.data.token_type);

    this.setAxiosDefaults(sandbox);

    setTimeout(() => {
      this.eventHandler.emit("debug", "Requesting new Access Token!");
      this.requestNewToken(clientId, clientSecret);
    }, this.expiry);
  }

  setAxiosDefaults(sandbox) {
    this.PayPal.setDefaultAuthorizationHeader(this.token)
      .setDefaultBaseUrl(
        sandbox ? "https://api-m.sandbox.paypal.com" : "https://api.paypal.com"
      )
      .setDefaultHeaders();
  }

  setScope(scope) {
    this.scope = scope;
    return this;
  }

  setAccessToken(token) {
    this.token = token;
    return this;
  }

  setTokenType(type) {
    this.tokenType = type;
    return this;
  }

  setAppId(id) {
    this.appId = id;
    return this;
  }

  setExpiry(milliseconds) {
    this.expiry = milliseconds;
    return this;
  }

  setNonce(nonce) {
    this.nonce = nonce;
    return this;
  }
}

module.exports = Token;
