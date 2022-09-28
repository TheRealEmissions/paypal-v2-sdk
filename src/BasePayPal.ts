import API from "./API/API";
import EventEmitter from "events";
import Invoicing from "./API/Invoicing";
import Authentication from "./API/Authentication";
import AddTracking from "./API/AddTracking";
import Products from "./API/Products";

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
