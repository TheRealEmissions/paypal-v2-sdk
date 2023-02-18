import Types, { ITypes, Static } from "@Types/Types.js";

export type TName = {
  alternate_full_name?: string;
  full_name?: string;
  given_name?: string;
  middle_name?: string;
  prefix?: string;
  suffix?: string;
  surname?: string;
};

class Name extends Types implements Static<ITypes, typeof Name> {
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

  static fromObject(obj: TName) {
    const name = new Name();
    if (obj.alternate_full_name) name.setAlternateFullName(obj.alternate_full_name);
    if (obj.full_name) name.setFullName(obj.full_name);
    if (obj.given_name) name.setGivenName(obj.given_name);
    if (obj.middle_name) name.setMiddleName(obj.middle_name);
    if (obj.prefix) name.setPrefix(obj.prefix);
    if (obj.suffix) name.setSuffix(obj.suffix);
    if (obj.surname) name.setSurname(obj.surname);
    return name;
  }
}

export default Name;
