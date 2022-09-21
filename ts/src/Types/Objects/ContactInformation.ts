import PayPal from "../../PayPal";
import Types from "../Types";
import AddressPortable from "./AddressPortable";
import Name from "./Name";

class ContactInformation extends Types {
  businessName: string;
  address: AddressPortable;
  name: Name;
  constructor(PayPal: PayPal) {
    super(PayPal);
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
}

export default ContactInformation;
