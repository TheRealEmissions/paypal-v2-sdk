import Types, { ITypes, Static } from "@Types/Types.js";

export type TField = {
  field?: string;
};

class Field extends Types implements Static<ITypes, typeof Field> {
  field?: string;
  constructor() {
    super();
  }

  setField(field: string) {
    this.field = field;
    return this;
  }

  static fromObject(obj: TField) {
    const field = new Field();
    if (obj.field) field.setField(obj.field);
    return field;
  }
}

export default Field;
