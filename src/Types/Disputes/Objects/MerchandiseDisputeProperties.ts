import { IUtility, Static, Utility, OnlySetters } from "../../Utility.js";
import { IssueType } from "../Enums/IssueType.js";
import { CancellationDetails, TCancellationDetails } from "./CancellationDetails.js";
import { PortablePostalAddress, TPortablePostalAddress } from "./PortablePostalAddress.js";
import { ProductDetails, TProductDetails } from "./ProductDetails.js";
import { ServiceDetails, TServiceDetails } from "./ServiceDetails.js";

export type TMerchandiseDisputeProperties = {
  cancellation_details?: TCancellationDetails;
  issue_type?: keyof typeof IssueType;
  product_details?: TProductDetails;
  return_shipping_address?: TPortablePostalAddress;
  service_details?: TServiceDetails;
};

type MerchandiseDisputePropertiesFields = {
  readonly cancellationDetails?: CancellationDetails;
  readonly issueType?: IssueType;
  readonly productDetails?: ProductDetails;
  readonly returnShippingAddress?: PortablePostalAddress;
  readonly serviceDetails?: ServiceDetails;
};

export class MerchandiseDisputeProperties
  extends Utility
  implements Static<IUtility, typeof MerchandiseDisputeProperties>
{
  private cancellationDetails?: CancellationDetails;
  private issueType?: IssueType;
  private productDetails?: ProductDetails;
  private returnShippingAddress?: PortablePostalAddress;
  private serviceDetails?: ServiceDetails;

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
  public setProductDetails(productDetails: (productDetails: OnlySetters<ProductDetails>) => void): this;
  public setProductDetails(productDetails: ProductDetails | ((productDetails: OnlySetters<ProductDetails>) => void)) {
    if (productDetails instanceof ProductDetails) this.productDetails = productDetails;
    else productDetails((this.productDetails = new ProductDetails()));
    return this;
  }
  public getProductDetails() {
    return this.productDetails;
  }

  public setReturnShippingAddress(returnShippingAddress: PortablePostalAddress): this;
  public setReturnShippingAddress(
    returnShippingAddress: (returnShippingAddress: OnlySetters<PortablePostalAddress>) => void
  ): this;
  public setReturnShippingAddress(
    returnShippingAddress: PortablePostalAddress | ((returnShippingAddress: OnlySetters<PortablePostalAddress>) => void)
  ) {
    if (returnShippingAddress instanceof PortablePostalAddress) this.returnShippingAddress = returnShippingAddress;
    else returnShippingAddress((this.returnShippingAddress = new PortablePostalAddress()));
    return this;
  }
  public getReturnShippingAddress() {
    return this.returnShippingAddress;
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

  public override getFields<T extends MerchandiseDisputePropertiesFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TMerchandiseDisputeProperties) {
    const merchandiseDisputeProperties = new MerchandiseDisputeProperties();
    if (obj.cancellation_details)
      merchandiseDisputeProperties.setCancellationDetails(CancellationDetails.fromObject(obj.cancellation_details));
    if (obj.issue_type) merchandiseDisputeProperties.setIssueType(IssueType[obj.issue_type]);
    if (obj.product_details)
      merchandiseDisputeProperties.setProductDetails(ProductDetails.fromObject(obj.product_details));
    if (obj.return_shipping_address)
      merchandiseDisputeProperties.setReturnShippingAddress(
        PortablePostalAddress.fromObject(obj.return_shipping_address)
      );
    if (obj.service_details)
      merchandiseDisputeProperties.setServiceDetails(ServiceDetails.fromObject(obj.service_details));
    return merchandiseDisputeProperties;
  }
}
