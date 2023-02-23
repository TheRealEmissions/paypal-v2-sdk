import { IssueType } from "../Enums/IssueType";
import Types, { ITypes, Static } from "../Types";
import AddressPortable, { TAddressPortable } from "./AddressPortable";
import CancellationDetails, { TCancellationDetails } from "./CancellationDetails";
import ProductDetails, { TProductDetails } from "./ProductDetails";
import ServiceDetails, { TServiceDetails } from "./ServiceDetails";

export type TMerchandiseDisputeProperties = {
  cancellation_details?: TCancellationDetails;
  issue_type?: keyof typeof IssueType;
  product_details?: TProductDetails;
  return_shipping_address?: TAddressPortable;
  service_details?: TServiceDetails;
};

class MerchandiseDisputeProperties extends Types implements Static<ITypes, typeof MerchandiseDisputeProperties> {
  cancellationDetails?: CancellationDetails;
  issueType?: IssueType;
  productDetails?: ProductDetails;
  returnShippingAddress?: AddressPortable;
  serviceDetails?: ServiceDetails;

  constructor() {
    super();
  }

  setCancellationDetails(
    cancellationDetails: CancellationDetails | ((cancellationDetails: CancellationDetails) => void)
  ) {
    if (cancellationDetails instanceof CancellationDetails) this.cancellationDetails = cancellationDetails;
    else cancellationDetails((this.cancellationDetails = new CancellationDetails()));
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

  setReturnShippingAddress(
    returnShippingAddress: AddressPortable | ((returnShippingAddress: AddressPortable) => void)
  ) {
    if (returnShippingAddress instanceof AddressPortable) this.returnShippingAddress = returnShippingAddress;
    else returnShippingAddress((this.returnShippingAddress = new AddressPortable()));
    return this;
  }

  setServiceDetails(serviceDetails: ServiceDetails | ((serviceDetails: ServiceDetails) => void)) {
    if (serviceDetails instanceof ServiceDetails) this.serviceDetails = serviceDetails;
    else serviceDetails((this.serviceDetails = new ServiceDetails()));
    return this;
  }

  static fromObject(obj: TMerchandiseDisputeProperties) {
    const merchandiseDisputeProperties = new MerchandiseDisputeProperties();
    if (obj.cancellation_details)
      merchandiseDisputeProperties.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.issue_type) merchandiseDisputeProperties.setIssueType(IssueType[obj.issue_type]);
    if (obj.product_details)
      merchandiseDisputeProperties.setProductDetails(ProductDetails.fromObject(obj.product_details));
    if (obj.return_shipping_address)
      merchandiseDisputeProperties.setReturnShippingAddress(AddressPortable.fromObject(obj.return_shipping_address));
    if (obj.service_details)
      merchandiseDisputeProperties.setServiceDetails(ServiceDetails.fromObject(obj.service_details));
    return merchandiseDisputeProperties;
  }
}

export default MerchandiseDisputeProperties;
