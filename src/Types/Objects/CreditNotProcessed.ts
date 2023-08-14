import { IssueType } from "../Enums/IssueType.js";
import { IUtility, Static, Utility } from "../Utility.js";
import { CancellationDetails, TCancellationDetails } from "./CancellationDetails.js";
import { Money, TMoney } from "./Money.js";
import { ProductDetails, TProductDetails } from "./ProductDetails.js";
import { ResponseAgreedRefundDetails, TResponseAgreedRefundDetails } from "./ResponseAgreedRefundDetails.js";
import { ServiceDetails, TServiceDetails } from "./ServiceDetails.js";

export type TCreditNotProcessed = {
  agreed_refund_details?: TResponseAgreedRefundDetails;
  cancellation_details?: TCancellationDetails;
  expected_refund?: TMoney;
  issue_type?: keyof typeof IssueType;
  product_details?: TProductDetails;
  service_details?: TServiceDetails;
};

export class CreditNotProcessed extends Utility implements Static<IUtility, typeof CreditNotProcessed> {
  private agreedRefundDetails?: ResponseAgreedRefundDetails;
  private cancellationDetails?: CancellationDetails;
  private expectedRefund?: Money;
  private issueType?: IssueType;
  private productDetails?: ProductDetails;
  private serviceDetails?: ServiceDetails;

  public setAgreedRefundDetails(agreedRefundDetails: ResponseAgreedRefundDetails): this;
  public setAgreedRefundDetails(agreedRefundDetails: (agreedRefundDetails: ResponseAgreedRefundDetails) => void): this;
  public setAgreedRefundDetails(
    agreedRefundDetails: ResponseAgreedRefundDetails | ((agreedRefundDetails: ResponseAgreedRefundDetails) => void)
  ) {
    if (agreedRefundDetails instanceof ResponseAgreedRefundDetails) this.agreedRefundDetails = agreedRefundDetails;
    else agreedRefundDetails((this.agreedRefundDetails = new ResponseAgreedRefundDetails()));
    return this;
  }
  public getAgreedRefundDetails() {
    return this.agreedRefundDetails;
  }

  public setCancellationDetails(cancellationDetails: CancellationDetails): this;
  public setCancellationDetails(cancellationDetails: (cancellationDetails: CancellationDetails) => void): this;
  public setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: CancellationDetails) => void)
  ) {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
    return this;
  }
  public getCancellationDetails() {
    return this.cancellationDetails;
  }

  public setExpectedRefund(expectedRefund: Money): this;
  public setExpectedRefund(expectedRefund: (expectedRefund: Money) => void): this;
  public setExpectedRefund(expectedRefund: Money | ((expectedRefund: Money) => void)) {
    if (expectedRefund instanceof Money) this.expectedRefund = expectedRefund;
    else expectedRefund((this.expectedRefund = new Money()));
    return this;
  }
  public getExpectedRefund() {
    return this.expectedRefund;
  }

  public setIssueType(issueType: IssueType): this;
  public setIssueType(issueType: (issueType: typeof IssueType) => IssueType): this;
  public setIssueType(issueType: IssueType | ((issueType: typeof IssueType) => IssueType)) {
    if (typeof issueType === "function") this.issueType = issueType(IssueType);
    else this.issueType = issueType;
    return this;
  }
  public getIssueType() {
    return this.issueType;
  }

  public setProductDetails(productDetails: ProductDetails): this;
  public setProductDetails(productDetails: (productDetails: ProductDetails) => void): this;
  public setProductDetails(productDetails: ProductDetails | ((productDetails: ProductDetails) => void)) {
    if (productDetails instanceof ProductDetails) this.productDetails = productDetails;
    else productDetails((this.productDetails = new ProductDetails()));
    return this;
  }
  public getProductDetails() {
    return this.productDetails;
  }

  public setServiceDetails(serviceDetails: ServiceDetails): this;
  public setServiceDetails(serviceDetails: (serviceDetails: ServiceDetails) => void): this;
  public setServiceDetails(serviceDetails: ServiceDetails | ((serviceDetails: ServiceDetails) => void)) {
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
      creditNotProcessed.setAgreedRefundDetails(ResponseAgreedRefundDetails.fromObject(obj.agreed_refund_details));
    if (obj.cancellation_details)
      creditNotProcessed.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.expected_refund) creditNotProcessed.setExpectedRefund(Money.fromObject(obj.expected_refund));
    if (obj.issue_type) creditNotProcessed.setIssueType(IssueType[obj.issue_type]);
    if (obj.product_details) creditNotProcessed.setProductDetails(ProductDetails.fromObject(obj.product_details));
    if (obj.service_details) creditNotProcessed.setServiceDetails(ServiceDetails.fromObject(obj.service_details));
    return creditNotProcessed;
  }
}
