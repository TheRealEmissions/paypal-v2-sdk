import PayPal from "../PayPal";

class Authentication {
  PayPal: PayPal;
  scope: string;
  token: string;
  tokenType: string;
  appId: string;
  expiry: number;
  nonce: string;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  async requestNewToken(
    clientId: string,
    clientSecret: string,
    sandbox: boolean
  ) {
    const response = await this.PayPal.API.post<any>(
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

    this.PayPal.emit(
      "debug",
      "Requested token!\n" + JSON.stringify(response.data, null, 2)
    );

    this.setAccessToken(response.data.access_token)
      .setTokenType(response.data.token_type)
      .setAppId(response.data.app_id)
      .setExpiry(response.data.expires_in)
      .setNonce(response.data.nonce)
      .setScope(response.data.scope)
      .setAxiosDefaults(sandbox);

    setTimeout(() => {
      this.PayPal.emit("debug", "Token expired, requesting new token...");
      this.requestNewToken(clientId, clientSecret, sandbox);
    }, this.expiry);
  }

  setAxiosDefaults(sandbox: boolean) {
    this.PayPal.API.setDefaultAuthorizationHeader(this.token)
      .setDefaultBaseUrl(
        sandbox ? "https://api-m.sandbox.com" : "https://api.paypal.com"
      )
      .setDefaultHeaders();
    return this;
  }

  setScope(scope: string) {
    this.scope = scope;
    return this;
  }

  setAccessToken(token: string) {
    this.token = token;
    return this;
  }

  setTokenType(tokenType: string) {
    this.tokenType = tokenType;
    return this;
  }

  setAppId(appId: string) {
    this.appId = appId;
    return this;
  }

  setExpiry(expiry: number) {
    this.expiry = expiry;
    return this;
  }

  setNonce(nonce: string) {
    this.nonce = nonce;
    return this;
  }
}

export default Authentication;
