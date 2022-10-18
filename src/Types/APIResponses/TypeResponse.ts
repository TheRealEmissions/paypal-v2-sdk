import Types from "../Types.js";

class TypeResponse extends Types {
  constructor() {
    super();
  }

  override fromObject() {
    throw new Error("Method not supported for API Responses. Properties are read-only.");
    return this;
  }
}

export default TypeResponse;
