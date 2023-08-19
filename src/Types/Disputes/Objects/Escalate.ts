import { IUtility, Static, Utility } from "../../Utility.js";

export type TEscalate = {
  note: string;
};

type EscalateFields = {
  readonly note: string;
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

  public override getFields<T extends Partial<EscalateFields>>() {
    return super._getFields<T>();
  }

  static fromObject(obj: TEscalate) {
    const escalate = new Escalate();
    escalate.setNote(obj.note);
    return escalate;
  }
}
