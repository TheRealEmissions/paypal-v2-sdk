import API from "./API/API.js";
import EventEmitter from "events";
import Invoicing from "./API/Invoicing.js";
import Authentication from "./API/Authentication.js";
import AddTracking from "./API/AddTracking.js";
import Products from "./API/Products.js";

abstract class BasePayPal extends EventEmitter {
  clientId: string | null;
  clientSecret: string | null;
  sandbox: boolean;
  API: API;
  Invoicing: Invoicing;
  Auth: Authentication;
  AddTracking: AddTracking;
  Products: Products;
  constructor() {
    super({
      captureRejections: true,
    });
    this.clientId = null;
    this.clientSecret = null;
    this.sandbox = false;

    this.API = new API();
    this.Auth = new Authentication(this);
    this.Invoicing = new Invoicing(this);
    this.AddTracking = new AddTracking(this);
    this.Products = new Products(this);
  }

  configure(id: string, secret: string, sandbox = false) {
    this.clientId = id;
    this.clientSecret = secret;
    this.sandbox = sandbox;

    this.emit("debug", `PayPal Configured!\nID: ${id}\nSecret: ${secret}\nSandbox? ${sandbox}`);
  }

  abstract authenticate(): Promise<void>;
}

export default BasePayPal;
