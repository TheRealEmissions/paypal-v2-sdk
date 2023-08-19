import { Utility, IUtility, Static } from "../Utility.js";

export type TErrorDetails = {
  issue: string;
  description?: string;
  field?: string;
  location?: string;
  value?: string;
};

type ErrorDetailsFields = {
  readonly issue?: string;
  readonly description?: string;
  readonly field?: string;
  readonly location?: string;
  readonly value?: string;
};

export class ErrorDetails extends Utility implements Static<IUtility, typeof ErrorDetails> {
  private issue?: string;
  private description?: string;
  private field?: string;
  private location?: string;
  private value?: string;

  public setIssue(issue: string) {
    this.issue = issue;
    return this;
  }
  public getIssue() {
    return this.issue;
  }

  public setDescription(description: string) {
    this.description = description;
    return this;
  }
  public getDescription() {
    return this.description;
  }

  public setField(field: string) {
    this.field = field;
    return this;
  }
  public getField() {
    return this.field;
  }

  public setLocation(location: string) {
    this.location = location;
    return this;
  }
  public getLocation() {
    return this.location;
  }

  public setValue(value: string) {
    this.value = value;
    return this;
  }
  public getValue() {
    return this.value;
  }

  public override getFields<T extends Partial<ErrorDetailsFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TErrorDetails): ErrorDetails {
    const errorDetails = new ErrorDetails();
    if (obj.issue) errorDetails.setIssue(obj.issue);
    if (obj.description) errorDetails.setDescription(obj.description);
    if (obj.field) errorDetails.setField(obj.field);
    if (obj.location) errorDetails.setLocation(obj.location);
    if (obj.value) errorDetails.setValue(obj.value);
    return errorDetails;
  }
}
