import { IUtility, OnlySetters, Static, Utility } from "../../Utility";
import { Evidence, TEvidence } from "./Evidence";
import { PortablePostalAddress, TPortablePostalAddress } from "./PortablePostalAddress";

export type TEvidences = {
  evidences?: TEvidence[];
  return_shipping_address?: TPortablePostalAddress;
};

export class Evidences extends Utility implements Static<IUtility, typeof Evidences> {
  private evidences?: Evidence[];
  private returnShippingAddress?: PortablePostalAddress;

  public setEvidences(...evidences: Evidence[]): this;
  public setEvidences(...evidences: ((evidences: OnlySetters<Evidence>) => void)[]): this;
  public setEvidences(...evidences: (Evidence | ((evidence: OnlySetters<Evidence>) => void))[]): this {
    this.evidences = evidences.map((evidence) => {
      if (evidence instanceof Evidence) return evidence;
      else {
        const e = new Evidence();
        evidence(e);
        return e;
      }
    });
    return this;
  }
  public getEvidences() {
    return this.evidences;
  }

  public setReturnShippingAddress(returnShippingAddress: PortablePostalAddress): this;
  public setReturnShippingAddress(
    returnShippingAddress: (returnShippingAddress: OnlySetters<PortablePostalAddress>) => void
  ): this;
  public setReturnShippingAddress(
    returnShippingAddress: PortablePostalAddress | ((returnShippingAddress: OnlySetters<PortablePostalAddress>) => void)
  ): this {
    if (returnShippingAddress instanceof PortablePostalAddress) {
      this.returnShippingAddress = returnShippingAddress;
    } else {
      const returnShippingAddressInstance = new PortablePostalAddress();
      returnShippingAddress(returnShippingAddressInstance);
      this.returnShippingAddress = returnShippingAddressInstance;
    }
    return this;
  }
  public getReturnShippingAddress() {
    return this.returnShippingAddress;
  }

  public override getFields<T extends TEvidences>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TEvidences) {
    const evidences = new Evidences();
    if (obj.evidences) evidences.setEvidences(...obj.evidences.map((evidence) => Evidence.fromObject(evidence)));
    if (obj.return_shipping_address)
      evidences.setReturnShippingAddress(PortablePostalAddress.fromObject(obj.return_shipping_address));
    return evidences;
  }
}
