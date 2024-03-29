import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { ProductDetailedProductReceived } from "../Enums/ProductDetailsProductReceived.js";
import { ReturnDetails, TReturnDetails } from "./ReturnDetails.js";

export type TProductDetails = {
  description?: string;
  expected_delivery_date?: string;
  product_received?: keyof typeof ProductDetailedProductReceived;
  product_received_time?: string;
  purchase_url?: string;
  return_details?: TReturnDetails;
  sub_reasons?: string[];
};

type ProductDetailsFields = {
  readonly description?: string;
  readonly expectedDeliveryDate?: string;
  readonly productReceived?: ProductDetailedProductReceived;
  readonly productReceivedTime?: string;
  readonly purchaseUrl?: string;
  readonly returnDetails?: ReturnDetails;
  readonly subReasons?: string[];
};

export class ProductDetails extends Utility implements Static<IUtility, typeof ProductDetails> {
  private description?: string;
  private expectedDeliveryDate?: string;
  private productReceived?: ProductDetailedProductReceived;
  private productReceivedTime?: string;
  private purchaseUrl?: string;
  private returnDetails?: ReturnDetails;
  private subReasons?: string[];

  public setDescription(description: string) {
    this.description = description;
    return this;
  }
  public getDescription() {
    return this.description;
  }

  public setExpectedDeliveryDate(expectedDeliveryDate: string) {
    this.expectedDeliveryDate = expectedDeliveryDate;
    return this;
  }
  public getExpectedDeliveryDate() {
    return this.expectedDeliveryDate;
  }

  public setProductReceived(productReceived: ProductDetailedProductReceived): this;
  public setProductReceived(
    productReceived: (productReceived: typeof ProductDetailedProductReceived) => ProductDetailedProductReceived
  ): this;
  public setProductReceived(
    productReceived:
      | ProductDetailedProductReceived
      | ((productReceived: typeof ProductDetailedProductReceived) => ProductDetailedProductReceived)
  ) {
    if (typeof productReceived === "function") this.productReceived = productReceived(ProductDetailedProductReceived);
    else this.productReceived = productReceived;
    return this;
  }
  public getProductReceived() {
    return this.productReceived;
  }

  public setProductReceivedTime(productReceivedTime: string) {
    this.productReceivedTime = productReceivedTime;
    return this;
  }
  public getProductReceivedTime() {
    return this.productReceivedTime;
  }

  public setPurchaseUrl(purchaseUrl: string) {
    this.purchaseUrl = purchaseUrl;
    return this;
  }
  public getPurchaseUrl() {
    return this.purchaseUrl;
  }

  public setReturnDetails(returnDetails: ReturnDetails): this;
  public setReturnDetails(returnDetails: (returnDetails: OnlySetters<ReturnDetails>) => void): this;
  public setReturnDetails(returnDetails: ReturnDetails | ((returnDetails: OnlySetters<ReturnDetails>) => void)) {
    if (returnDetails instanceof ReturnDetails) this.returnDetails = returnDetails;
    else returnDetails((this.returnDetails = new ReturnDetails()));
    return this;
  }
  public getReturnDetails() {
    return this.returnDetails;
  }

  public setSubReasons(...subReasons: string[]) {
    this.subReasons = subReasons;
    return this;
  }
  public getSubReasons() {
    return this.subReasons;
  }

  public override getFields<T extends ProductDetailsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TProductDetails) {
    const productDetails = new ProductDetails();
    if (obj.description) productDetails.setDescription(obj.description);
    if (obj.expected_delivery_date) productDetails.setExpectedDeliveryDate(obj.expected_delivery_date);
    if (obj.product_received) productDetails.setProductReceived(ProductDetailedProductReceived[obj.product_received]);
    if (obj.product_received_time) productDetails.setProductReceivedTime(obj.product_received_time);
    if (obj.purchase_url) productDetails.setPurchaseUrl(obj.purchase_url);
    if (obj.return_details) productDetails.setReturnDetails(ReturnDetails.fromObject(obj.return_details));
    if (obj.sub_reasons) productDetails.setSubReasons(...obj.sub_reasons);
    return productDetails;
  }
}
