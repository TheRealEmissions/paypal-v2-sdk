import { IUtility, Static, Utility } from "../Utility.js";

export type TEscalate = {
  note: string;
};

export class Escalate extends Utility implements Static<IUtility, typeof Escalate> {
  private note!: string;

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public override getFields<T extends Partial<TEscalate>>() {
    return super.getFields<T>();
  }

  static fromObject(obj: TEscalate) {
    const escalate = new Escalate();
    escalate.setNote(obj.note);
    return escalate;
  }
}
