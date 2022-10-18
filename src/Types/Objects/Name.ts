import Types from "../Types.js";

export type TName = {
  alternate_full_name?: string;
  full_name?: string;
  given_name?: string;
  middle_name?: string;
  prefix?: string;
  suffix?: string;
  surname?: string;
};

class Name extends Types {
  alternateFullName?: string;
  fullName?: string;
  givenName?: string;
  middleName?: string;
  prefix?: string;
  suffix?: string;
  surname?: string;
  constructor() {
    super();
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

  override fromObject(obj: TName) {
    this.alternateFullName = obj.alternate_full_name;
    this.fullName = obj.full_name;
    this.givenName = obj.given_name;
    this.middleName = obj.middle_name;
    this.prefix = obj.prefix;
    this.suffix = obj.suffix;
    this.surname = obj.surname;
    return this;
  }
}

export default Name;
