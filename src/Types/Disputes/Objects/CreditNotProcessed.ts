import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { ItemType } from "../Enums/ItemType.js";
import { AgreedRefundDetails, TAgreedRefundDetails } from "./AgreedRefundDetails.js";
import { CancellationDetails, TCancellationDetails } from "./CancellationDetails.js";
import { Money, TMoney } from "./Money.js";
import { ProductDetails, TProductDetails } from "./ProductDetails.js";
import { ServiceDetails, TServiceDetails } from "./ServiceDetails.js";

export type TCreditNotProcessed = {
  agreed_refund_details?: TAgreedRefundDetails;
  cancellation_details?: TCancellationDetails;
  expected_refund?: TMoney;
  issue_type?: keyof typeof ItemType;
  product_details?: TProductDetails;
  service_details?: TServiceDetails;
};

export class CreditNotProcessed extends Utility implements Static<IUtility, typeof CreditNotProcessed> {
  private agreedRefundDetails?: AgreedRefundDetails;
  private cancellationDetails?: CancellationDetails;
  private expectedRefund?: Money;
  private issueType?: ItemType;
  private productDetails?: ProductDetails;
  private serviceDetails?: ServiceDetails;

  public setAgreedRefundDetails(agreedRefundDetails: AgreedRefundDetails): this;
  public setAgreedRefundDetails(
    agreedRefundDetails: (agreedRefundDetails: OnlySetters<AgreedRefundDetails>) => void
  ): this;
  public setAgreedRefundDetails(
    agreedRefundDetails: AgreedRefundDetails | ((agreedRefundDetails: OnlySetters<AgreedRefundDetails>) => void)
  ) {
    if (agreedRefundDetails instanceof AgreedRefundDetails) this.agreedRefundDetails = agreedRefundDetails;
    else agreedRefundDetails((this.agreedRefundDetails = new AgreedRefundDetails()));
    return this;
  }
  public getAgreedRefundDetails() {
    return this.agreedRefundDetails;
  }

  public setCancellationDetails(cancellationDetails: CancellationDetails): this;
  public setCancellationDetails(
    cancellationDetails: (cancellationDetails: OnlySetters<CancellationDetails>) => void
  ): this;
  public setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: OnlySetters<CancellationDetails>) => void)
  ) {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
    return this;
  }
  public getCancellationDetails() {
    return this.cancellationDetails;
  }

  public setExpectedRefund(expectedRefund: Money): this;
  public setExpectedRefund(expectedRefund: (expectedRefund: OnlySetters<Money>) => void): this;
  public setExpectedRefund(expectedRefund: Money | ((expectedRefund: OnlySetters<Money>) => void)) {
    if (expectedRefund instanceof Money) this.expectedRefund = expectedRefund;
    else expectedRefund((this.expectedRefund = new Money()));
    return this;
  }
  public getExpectedRefund() {
    return this.expectedRefund;
  }

  public setIssueType(issueType: ItemType): this;
  public setIssueType(issueType: (issueType: typeof ItemType) => ItemType): this;
  public setIssueType(issueType: ItemType | ((issueType: typeof ItemType) => ItemType)) {
    if (typeof issueType === "function") this.issueType = issueType(ItemType);
    else this.issueType = issueType;
    return this;
  }
  public getIssueType() {
    return this.issueType;
  }

  public setProductDetails(productDetails: ProductDetails): this;
  public setProductDetails(productDetails: (productDetails: OnlySetters<ProductDetails>) => void): this;
  public setProductDetails(productDetails: ProductDetails | ((productDetails: OnlySetters<ProductDetails>) => void)) {
    if (productDetails instanceof ProductDetails) this.productDetails = productDetails;
    else productDetails((this.productDetails = new ProductDetails()));
    return this;
  }
  public getProductDetails() {
    return this.productDetails;
  }

  public setServiceDetails(serviceDetails: ServiceDetails): this;
  public setServiceDetails(serviceDetails: (serviceDetails: OnlySetters<ServiceDetails>) => void): this;
  public setServiceDetails(serviceDetails: ServiceDetails | ((serviceDetails: OnlySetters<ServiceDetails>) => void)) {
    if (serviceDetails instanceof ServiceDetails) this.serviceDetails = serviceDetails;
    else serviceDetails((this.serviceDetails = new ServiceDetails()));
    return this;
  }
  public getServiceDetails() {
    return this.serviceDetails;
  }

  public override getFields<T extends TCreditNotProcessed>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCreditNotProcessed) {
    const creditNotProcessed = new CreditNotProcessed();
    if (obj.agreed_refund_details)
      creditNotProcessed.setAgreedRefundDetails(AgreedRefundDetails.fromObject(obj.agreed_refund_details));
    if (obj.cancellation_details)
      creditNotProcessed.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.expected_refund) creditNotProcessed.setExpectedRefund(Money.fromObject(obj.expected_refund));
    if (obj.issue_type) creditNotProcessed.setIssueType(ItemType[obj.issue_type]);
    if (obj.product_details) creditNotProcessed.setProductDetails(ProductDetails.fromObject(obj.product_details));
    if (obj.service_details) creditNotProcessed.setServiceDetails(ServiceDetails.fromObject(obj.service_details));
    return creditNotProcessed;
  }
}
