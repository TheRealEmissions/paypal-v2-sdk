import { Utility, IUtility, Static } from "../../Utility.js";
import { PatchOperation } from "../Enums/PatchOperation.js";

type PatchValue = number | string | boolean | null | any[] | object;

export type TPatch = {
  op: keyof typeof PatchOperation;
  from?: string;
  path?: string;
  value?: PatchValue;
};

export class Patch extends Utility implements Static<IUtility, typeof Patch> {
  private op?: PatchOperation;
  private from?: string;
  private path?: string;
  private value?: PatchValue;

  public setOp(op: PatchOperation): this;
  public setOp(op: (op: typeof PatchOperation) => PatchOperation): this;
  public setOp(op: PatchOperation | ((op: typeof PatchOperation) => PatchOperation)) {
    if (typeof op === "function") this.op = op(PatchOperation);
    else this.op = op;
    return this;
  }
  public getOp() {
    return this.op;
  }

  public setFrom(from: string) {
    this.from = from;
    return this;
  }
  public getFrom() {
    return this.from;
  }

  public setPath(path: string) {
    this.path = path;
    return this;
  }
  public getPath() {
    return this.path;
  }

  public setValue(value: PatchValue) {
    this.value = value;
    return this;
  }
  public getValue() {
    return this.value;
  }

  public override getFields<T extends Partial<TPatch>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPatch) {
    const patch = new Patch();
    if (obj.op) patch.setOp(PatchOperation[obj.op]);
    if (obj.from) patch.setFrom(obj.from);
    if (obj.path) patch.setPath(obj.path);
    if (obj.value) patch.setValue(obj.value);
    return patch;
  }
}
