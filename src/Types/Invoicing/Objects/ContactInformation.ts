import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { PortablePostalAddress, TPortablePostalAddress } from "./PortablePostalAddress.js";
import { Name, TName } from "./Name.js";

export type TContactInformation = {
  business_name?: string;
  address?: TPortablePostalAddress;
  name?: TName;
};

type ContactInformationFields = {
  readonly businessName?: string;
  readonly address?: PortablePostalAddress;
  readonly name?: Name;
};

export class ContactInformation extends Utility implements Static<IUtility, typeof ContactInformation> {
  private businessName?: string;
  private address?: PortablePostalAddress;
  private name?: Name;

  public setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }
  public getBusinessName() {
    return this.businessName;
  }

  public setAddress(address: PortablePostalAddress): this;
  public setAddress(address: (address: OnlySetters<PortablePostalAddress>) => void): this;
  public setAddress(address: PortablePostalAddress | ((address: OnlySetters<PortablePostalAddress>) => void)) {
    if (address instanceof PortablePostalAddress) {
      this.address = address;
    } else {
      const addressInstance = new PortablePostalAddress();
      address(addressInstance);
      this.address = addressInstance;
    }
    return this;
  }
  public getAddress() {
    return this.address;
  }

  public setName(name: Name): this;
  public setName(name: (name: OnlySetters<Name>) => void): this;
  public setName(name: Name | ((name: OnlySetters<Name>) => void)): this {
    if (name instanceof Name) {
      this.name = name;
    } else {
      const nameInstance = new Name();
      name(nameInstance);
      this.name = nameInstance;
    }
    return this;
  }
  public getName() {
    return this.name;
  }

  public override getFields<T extends ContactInformationFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TContactInformation) {
    const contactInformation = new ContactInformation();
    if (obj.business_name) contactInformation.setBusinessName(obj.business_name);
    if (obj.address) contactInformation.setAddress(PortablePostalAddress.fromObject(obj.address));
    if (obj.name) contactInformation.setName(Name.fromObject(obj.name));
    return contactInformation;
  }
}
