import Types, { ITypes, Static } from "../Types.js";
import AddressPortable, { TAddressPortable } from "./AddressPortable.js";
import Name, { TName } from "./Name.js";

export type TContactInformation = {
  business_name?: string;
  address?: TAddressPortable;
  name?: TName;
};

class ContactInformation extends Types implements Static<ITypes, typeof ContactInformation> {
  businessName?: string;
  address?: AddressPortable;
  name?: Name;

  setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }

  setAddress(address: AddressPortable): this;
  setAddress(address: (address: AddressPortable) => void): this;
  setAddress(address: AddressPortable | ((address: AddressPortable) => void)) {
    if (address instanceof AddressPortable) {
      this.address = address;
    } else {
      const addressInstance = new AddressPortable();
      address(addressInstance);
      this.address = addressInstance;
    }
    return this;
  }

  setName(name: Name): this;
  setName(name: (name: Name) => void): this;
  setName(name: Name | ((name: Name) => void)): this {
    if (name instanceof Name) {
      this.name = name;
    } else {
      const nameInstance = new Name();
      name(nameInstance);
      this.name = nameInstance;
    }
    return this;
  }

  static fromObject(obj: TContactInformation) {
    const contactInformation = new ContactInformation();
    if (obj.business_name) contactInformation.setBusinessName(obj.business_name);
    if (obj.address) contactInformation.setAddress(AddressPortable.fromObject(obj.address));
    if (obj.name) contactInformation.setName(Name.fromObject(obj.name));
    return contactInformation;
  }
}

export default ContactInformation;
