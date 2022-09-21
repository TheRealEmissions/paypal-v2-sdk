import Types from "../Types";

export type TField = {
  field: string;
};

class Field extends Types {
  field?: string;
  constructor() {
    super();
  }

  setField(field: string) {
    this.field = field;
    return this;
  }

  override fromObject(obj: TField) {
    this.field = obj.field;
    return this;
  }
}

export default Field;
