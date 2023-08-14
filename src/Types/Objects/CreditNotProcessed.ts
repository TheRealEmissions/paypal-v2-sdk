import { IssueType } from "../Enums/IssueType";
import Types, { ITypes, Static } from "../Types";
import CancellationDetails, { TCancellationDetails } from "./CancellationDetails";
import Money, { TMoney } from "./Money";
import ProductDetails, { TProductDetails } from "./ProductDetails";
import ResponseAgreedRefundDetails, { TResponseAgreedRefundDetails } from "./ResponseAgreedRefundDetails";
import ServiceDetails, { TServiceDetails } from "./ServiceDetails";

export type TCreditNotProcessed = {
  agreed_refund_details?: TResponseAgreedRefundDetails;
  cancellation_details?: TCancellationDetails;
  expected_refund?: TMoney;
  issue_type?: keyof typeof IssueType;
  product_details?: TProductDetails;
  service_details?: TServiceDetails;
};

class CreditNotProcessed extends Types implements Static<ITypes, typeof CreditNotProcessed> {
  agreedRefundDetails?: ResponseAgreedRefundDetails;
  cancellationDetails?: CancellationDetails;
  expectedRefund?: Money;
  issueType?: IssueType;
  productDetails?: ProductDetails;
  serviceDetails?: ServiceDetails;

  constructor() {
    super();
  }

  setAgreedRefundDetails(
    agreedRefundDetails: ResponseAgreedRefundDetails | ((agreedRefundDetails: ResponseAgreedRefundDetails) => void)
  ) {
    if (agreedRefundDetails instanceof ResponseAgreedRefundDetails) this.agreedRefundDetails = agreedRefundDetails;
    else agreedRefundDetails((this.agreedRefundDetails = new ResponseAgreedRefundDetails()));
    return this;
  }

  setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: CancellationDetails) => void)
  ) {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
    return this;
  }

  setExpectedRefund(expectedRefund: Money | ((expectedRefund: Money) => void)) {
    if (expectedRefund instanceof Money) this.expectedRefund = expectedRefund;
    else expectedRefund((this.expectedRefund = new Money()));
    return this;
  }

  setIssueType(issueType: IssueType | ((issueType: typeof IssueType) => IssueType)) {
    if (typeof issueType === "function") this.issueType = issueType(IssueType);
    else this.issueType = issueType;
    return this;
  }

  setProductDetails(productDetails: ProductDetails | ((productDetails: ProductDetails) => void)) {
    if (productDetails instanceof ProductDetails) this.productDetails = productDetails;
    else productDetails((this.productDetails = new ProductDetails()));
    return this;
  }

  setServiceDetails(serviceDetails: ServiceDetails | ((serviceDetails: ServiceDetails) => void)) {
    if (serviceDetails instanceof ServiceDetails) this.serviceDetails = serviceDetails;
    else serviceDetails((this.serviceDetails = new ServiceDetails()));
    return this;
  }

  static fromObject(obj: TCreditNotProcessed) {
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

export default CreditNotProcessed;
