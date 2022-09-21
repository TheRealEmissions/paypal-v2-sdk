import Types from "../Types";
import AddressPortable, { TAddressPortable } from "./AddressPortable";
import Name, { TName } from "./Name";

export type TContactInformation = {
  business_name: string;
  address: TAddressPortable;
  name: TName;
};

class ContactInformation extends Types {
  businessName?: string;
  address?: AddressPortable;
  name?: Name;
  constructor() {
    super();
  }

  setBusinessName(businessName: string) {
    this.businessName = businessName;
    return this;
  }

  setAddress(address: AddressPortable) {
    this.address = address;
    return this;
  }

  setName(name: Name) {
    this.name = name;
    return this;
  }

  override fromObject(obj: TContactInformation) {
    this.businessName = obj.business_name;
    this.address = new AddressPortable().fromObject(obj.address);
    this.name = new Name().fromObject(obj.name);
    return this;
  }
}

export default ContactInformation;
