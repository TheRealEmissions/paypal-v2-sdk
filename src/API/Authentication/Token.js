const Axios = require("axios").default;

class Token {
  constructor() {}

  async requestNewToken(clientId, clientSecret) {
    const response = await Axios.post(
      "https://api.paypal.com/v1/oauth2/token",
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
    console.log(JSON.stringify(response.data));
    this.setAccessToken(response.data.access_token)
      .setAppId(response.data.app_id)
      .setExpiry(response.data.expires_in)
      .setNonce(response.data.nonce)
      .setScope(response.data.scope)
      .setTokenType(response.data.token_type);

    setTimeout(() => {
      this.requestNewToken(clientId, clientSecret);
    }, this.expiry);
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
