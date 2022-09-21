import API from "./API/API";
import EventEmitter from "events";

class BasePayPal extends EventEmitter {
  clientId: string | null;
  clientSecret: string | null;
  sandbox: boolean;
  API: API;
  constructor() {
    super({
      captureRejections: true,
    });
    this.clientId = null;
    this.clientSecret = null;
    this.sandbox = false;
    this.API = new API();
  }

  configure(id: string, secret: string, sandbox = false) {
    this.clientId = id;
    this.clientSecret = secret;
    this.sandbox = sandbox;

    this.emit(
      "debug",
      `PayPal Configured!\nID: ${id}\nSecret: ${secret}\nSandbox? ${sandbox}`
    );
  }
}

export default BasePayPal;
