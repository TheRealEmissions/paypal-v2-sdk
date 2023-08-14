import { ProductReceived } from "../Enums/ProductReceived";
import Types, { ITypes, Static } from "../Types";
import ReturnDetails, { TReturnDetails } from "./ReturnDetails";
import SubReason, { TSubReason } from "./SubReason";

export type TProductDetails = {
  description?: string;
  expected_delivery_date?: string;
  product_received?: keyof typeof ProductReceived;
  product_received_time?: string;
  purchase_url?: string;
  return_details?: TReturnDetails;
  sub_reasons?: TSubReason[];
};

class ProductDetails extends Types implements Static<ITypes, typeof ProductDetails> {
  description?: string;
  expectedDeliveryDate?: string;
  productReceived?: ProductReceived;
  productReceivedTime?: string;
  purchaseUrl?: string;
  returnDetails?: ReturnDetails;
  subReasons?: SubReason[];

  constructor() {
    super();
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setExpectedDeliveryDate(expectedDeliveryDate: string) {
    this.expectedDeliveryDate = expectedDeliveryDate;
    return this;
  }

  setProductReceived(
    productReceived: ProductReceived | ((productReceived: typeof ProductReceived) => ProductReceived)
  ) {
    if (typeof productReceived === "function") this.productReceived = productReceived(ProductReceived);
    else this.productReceived = productReceived;
    return this;
  }

  setProductReceivedTime(productReceivedTime: string) {
    this.productReceivedTime = productReceivedTime;
    return this;
  }

  setPurchaseUrl(purchaseUrl: string) {
    this.purchaseUrl = purchaseUrl;
    return this;
  }

  setReturnDetails(returnDetails: ReturnDetails | ((returnDetails: ReturnDetails) => void)) {
    if (returnDetails instanceof ReturnDetails) this.returnDetails = returnDetails;
    else returnDetails((this.returnDetails = new ReturnDetails()));
    return this;
  }

  setSubReasons(...subReasons: (SubReason | ((subReason: SubReason) => void))[]) {
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

  static fromObject(obj: TProductDetails) {
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

export default ProductDetails;
