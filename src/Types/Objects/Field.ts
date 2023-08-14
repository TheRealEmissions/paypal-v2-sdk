import { Utility, IUtility, Static } from "../Utility.js";

export type TField = {
  field?: string;
};

export class Field extends Utility implements Static<IUtility, typeof Field> {
  private field?: string;

  public setField(field: string) {
    this.field = field;
    return this;
  }
  public getField() {
    return this.field;
  }

  public override getFields<T extends Partial<TField>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TField) {
    const field = new Field();
    if (obj.field) field.setField(obj.field);
    return field;
  }
}
