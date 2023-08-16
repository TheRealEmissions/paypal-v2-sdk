import { API } from "./API/API.js";
import EventEmitter from "events";
import { Invoicing } from "./API/Invoicing.js";
import { Authentication } from "./API/Authentication.js";
import { AddTracking } from "./API/AddTracking.js";
import { CatalogProducts } from "./API/CatalogProducts.js";
import { Disputes } from "./API/Disputes.js";
import { Orders } from "./API/Orders.js";

abstract class BasePayPal extends EventEmitter {
  private clientId: string | null;
  private clientSecret: string | null;
  private sandbox: boolean;
  private API: API;
  private Invoicing: Invoicing;
  private Auth: Authentication;
  private AddTracking: AddTracking;
  private CatalogProducts: CatalogProducts;
  private Disputes: Disputes;
  private Orders: Orders;

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
    this.CatalogProducts = new CatalogProducts(this);
    this.Disputes = new Disputes(this);
    this.Orders = new Orders(this);
  }

  configure(id: string, secret: string, sandbox = false) {
    this.clientId = id;
    this.clientSecret = secret;
    this.sandbox = sandbox;

    this.emit("debug", `PayPal Configured!\nID: ${id}\nSecret: ${secret}\nSandbox? ${sandbox}`);
  }

  getClientId() {
    return this.clientId;
  }

  getClientSecret() {
    return this.clientSecret;
  }

  isSandbox() {
    return this.sandbox;
  }

  getAPI() {
    return this.API;
  }

  getInvoicing() {
    return this.Invoicing;
  }

  getAuth() {
    return this.Auth;
  }

  getAddTracking() {
    return this.AddTracking;
  }

  getCatalogProducts() {
    return this.CatalogProducts;
  }

  getDisputes() {
    return this.Disputes;
  }

  getOrders() {
    return this.Orders;
  }

  abstract authenticate(): Promise<void>;
}

export default BasePayPal;
