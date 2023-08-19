import { Utility, IUtility, Static } from "../../Utility.js";

export type TName = {
  alternate_full_name?: string;
  full_name?: string;
  given_name?: string;
  middle_name?: string;
  prefix?: string;
  suffix?: string;
  surname?: string;
};

type NameFields = {
  readonly alternateFullName?: string;
  readonly fullName?: string;
  readonly givenName?: string;
  readonly middleName?: string;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly surname?: string;
};

export class Name extends Utility implements Static<IUtility, typeof Name> {
  private alternateFullName?: string;
  private fullName?: string;
  private givenName?: string;
  private middleName?: string;
  private prefix?: string;
  private suffix?: string;
  private surname?: string;

  /**
   * @deprecated
   */
  public setAlternateFullName(alternateFullName: string) {
    this.alternateFullName = alternateFullName;
    return this;
  }
  /**
   * @deprecated
   */
  public getAlternateFullName() {
    return this.alternateFullName;
  }

  public setFullName(fullName: string) {
    this.fullName = fullName;
    return this;
  }
  public getFullName() {
    return this.fullName;
  }

  public setGivenName(givenName: string) {
    this.givenName = givenName;
    return this;
  }
  public getGivenName() {
    return this.givenName;
  }

  public setMiddleName(middleName: string) {
    this.middleName = middleName;
    return this;
  }
  public getMiddleName() {
    return this.middleName;
  }

  public setPrefix(prefix: string) {
    this.prefix = prefix;
    return this;
  }
  public getPrefix() {
    return this.prefix;
  }

  public setSuffix(suffix: string) {
    this.suffix = suffix;
    return this;
  }
  public getSuffix() {
    return this.suffix;
  }

  public setSurname(surname: string) {
    this.surname = surname;
    return this;
  }
  public getSurname() {
    return this.surname;
  }

  public override getFields<T extends Partial<NameFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TName) {
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
