import Types from "../Types.js";

class TypeResponse extends Types {
  constructor() {
    super();
  }

  override fromObject(obj: object) {
    return this;
  }
}

export default TypeResponse;
