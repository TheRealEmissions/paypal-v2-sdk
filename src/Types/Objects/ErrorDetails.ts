import Types, { ITypes, Static } from "@Types/Types.js";

export type TErrorDetails = {
  issue: string;
  description?: string;
  field?: string;
  location?: string;
  value?: string;
};

class ErrorDetails extends Types implements Static<ITypes, typeof ErrorDetails> {
  issue?: string;
  description?: string;
  field?: string;
  location?: string;
  value?: string;
  constructor() {
    super();
  }

  setIssue(issue: string) {
    this.issue = issue;
    return this;
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setField(field: string) {
    this.field = field;
    return this;
  }

  setLocation(location: string) {
    this.location = location;
    return this;
  }

  setValue(value: string) {
    this.value = value;
    return this;
  }

  static fromObject(obj: TErrorDetails): ErrorDetails {
    const errorDetails = new ErrorDetails();
    if (obj.issue) errorDetails.setIssue(obj.issue);
    if (obj.description) errorDetails.setDescription(obj.description);
    if (obj.field) errorDetails.setField(obj.field);
    if (obj.location) errorDetails.setLocation(obj.location);
    if (obj.value) errorDetails.setValue(obj.value);
    return errorDetails;
  }
}

export default ErrorDetails;
