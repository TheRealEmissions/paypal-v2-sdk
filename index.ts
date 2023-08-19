import PayPal from "./src/PayPal.js";
import * as AddTracking from "./exports/AddTracking.js";
import * as CatalogProducts from "./exports/CatalogProducts.js";
import * as Disputes from "./exports/Disputes.js";
import * as Invoicing from "./exports/Invoicing.js";

const paypal = new PayPal();

export { paypal as PayPal, AddTracking, CatalogProducts, Disputes, Invoicing };
