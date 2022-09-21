import PayPal from "../../PayPal";
import Types from "../Types";

class Name extends Types {
  alternateFullName: string;
  fullName: string;
  givenName: string;
  middleName: string;
  prefix: string;
  suffix: string;
  surname: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

  /**
   * @deprecated
   */
  setAlternateFullName(alternateFullName: string) {
    this.alternateFullName = alternateFullName;
    return this;
  }

  setFullName(fullName: string) {
    this.fullName = fullName;
    return this;
  }

  setGivenName(givenName: string) {
    this.givenName = givenName;
    return this;
  }

  setMiddleName(middleName: string) {
    this.middleName = middleName;
    return this;
  }

  setPrefix(prefix: string) {
    this.prefix = prefix;
    return this;
  }

  setSuffix(suffix: string) {
    this.suffix = suffix;
    return this;
  }

  setSurname(surname: string) {
    this.surname = surname;
    return this;
  }
}

export default Name;
