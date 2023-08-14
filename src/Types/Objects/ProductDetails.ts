import { ProductReceived } from "../Enums/ProductReceived.js";
import { IUtility, Static, Utility } from "../Utility.js";
import { ReturnDetails, TReturnDetails } from "./ReturnDetails.js";
import { SubReason, TSubReason } from "./SubReason.js";

export type TProductDetails = {
  description?: string;
  expected_delivery_date?: string;
  product_received?: keyof typeof ProductReceived;
  product_received_time?: string;
  purchase_url?: string;
  return_details?: TReturnDetails;
  sub_reasons?: TSubReason[];
};

export class ProductDetails extends Utility implements Static<IUtility, typeof ProductDetails> {
  private description?: string;
  private expectedDeliveryDate?: string;
  private productReceived?: ProductReceived;
  private productReceivedTime?: string;
  private purchaseUrl?: string;
  private returnDetails?: ReturnDetails;
  private subReasons?: SubReason[];

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

  public setProductReceived(productReceived: ProductReceived): this;
  public setProductReceived(productReceived: (productReceived: typeof ProductReceived) => ProductReceived): this;
  public setProductReceived(
    productReceived: ProductReceived | ((productReceived: typeof ProductReceived) => ProductReceived)
  ) {
    if (typeof productReceived === "function") this.productReceived = productReceived(ProductReceived);
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
  public setReturnDetails(returnDetails: (returnDetails: ReturnDetails) => void): this;
  public setReturnDetails(returnDetails: ReturnDetails | ((returnDetails: ReturnDetails) => void)) {
    if (returnDetails instanceof ReturnDetails) this.returnDetails = returnDetails;
    else returnDetails((this.returnDetails = new ReturnDetails()));
    return this;
  }
  public getReturnDetails() {
    return this.returnDetails;
  }

  public setSubReasons(...subReasons: SubReason[]): this;
  public setSubReasons(...subReasons: ((subReason: SubReason) => void)[]): this;
  public setSubReasons(...subReasons: (SubReason | ((subReason: SubReason) => void))[]) {
    this.subReasons = subReasons.map((subReason) => {
      if (subReason instanceof SubReason) return subReason;
      else {
        const newSubReason = new SubReason();
        subReason(newSubReason);
        return newSubReason;
      }
    });
    return this;
  }
  public getSubReasons() {
    return this.subReasons;
  }

  public override getFields<T extends TProductDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TProductDetails) {
    const productDetails = new ProductDetails();
    if (obj.description) productDetails.setDescription(obj.description);
    if (obj.expected_delivery_date) productDetails.setExpectedDeliveryDate(obj.expected_delivery_date);
    if (obj.product_received) productDetails.setProductReceived(ProductReceived[obj.product_received]);
    if (obj.product_received_time) productDetails.setProductReceivedTime(obj.product_received_time);
    if (obj.purchase_url) productDetails.setPurchaseUrl(obj.purchase_url);
    if (obj.return_details) productDetails.setReturnDetails(ReturnDetails.fromObject(obj.return_details));
    if (obj.sub_reasons) productDetails.setSubReasons(...obj.sub_reasons.map(SubReason.fromObject));
    return productDetails;
  }
}
