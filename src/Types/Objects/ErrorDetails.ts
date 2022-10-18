import Types from "../Types.js";

export type TErrorDetails = {
  issue: string;
  description?: string;
  field?: string;
  location?: string;
  value?: string;
};

class ErrorDetails extends Types {
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

  override fromObject(obj: TErrorDetails): this {
    this.issue = obj.issue;
    this.description = obj.description;
    this.field = obj.field;
    this.location = obj.location;
    this.value = obj.value;
    return this;
  }
}

export default ErrorDetails;
