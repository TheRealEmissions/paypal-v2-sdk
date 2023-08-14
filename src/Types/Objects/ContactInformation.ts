import { Utility, IUtility, Static } from "../Utility.js";
import { AddressPortable, TAddressPortable } from "./AddressPortable.js";
import { Name, TName } from "./Name.js";

export type TContactInformation = {
  business_name?: string;
  address?: TAddressPortable;
  name?: TName;
};

export class ContactInformation extends Utility implements Static<IUtility, typeof ContactInformation> {
  private businessName?: string;
  private address?: AddressPortable;
  private name?: Name;

  public setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }
  public getBusinessName() {
    return this.businessName;
  }

  public setAddress(address: AddressPortable): this;
  public setAddress(address: (address: AddressPortable) => void): this;
  public setAddress(address: AddressPortable | ((address: AddressPortable) => void)) {
    if (address instanceof AddressPortable) {
      this.address = address;
    } else {
      const addressInstance = new AddressPortable();
      address(addressInstance);
      this.address = addressInstance;
    }
    return this;
  }
  public getAddress() {
    return this.address;
  }

  public setName(name: Name): this;
  public setName(name: (name: Name) => void): this;
  public setName(name: Name | ((name: Name) => void)): this {
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

  public override getFields<T extends TContactInformation>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TContactInformation) {
    const contactInformation = new ContactInformation();
    if (obj.business_name) contactInformation.setBusinessName(obj.business_name);
    if (obj.address) contactInformation.setAddress(AddressPortable.fromObject(obj.address));
    if (obj.name) contactInformation.setName(Name.fromObject(obj.name));
    return contactInformation;
  }
}
