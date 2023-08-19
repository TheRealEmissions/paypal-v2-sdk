import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { PatchOperation } from "../Enums/PatchOperation.js";

type PatchValue = number | string | boolean | null | any[] | object;

export type TPatch = {
  op: keyof typeof PatchOperation;
  from?: string;
  path?: string;
  value?: PatchValue;
};

type PatchFields = {
  readonly op?: PatchOperation;
  readonly from?: string;
  readonly path?: string;
  readonly value?: PatchValue;
};

export class Patch extends Utility implements Static<IUtility, typeof Patch> {
  private op?: PatchOperation;
  private from?: string;
  private path?: string;
  private value?: PatchValue;

  public setOp(op: PatchOperation): OnlySetters<this>;
  public setOp(op: (op: typeof PatchOperation) => PatchOperation): OnlySetters<this>;
  public setOp(op: PatchOperation | ((op: typeof PatchOperation) => PatchOperation)): OnlySetters<this> {
    if (typeof op === "function") this.op = op(PatchOperation);
    else this.op = op;
    return this;
  }
  public getOp() {
    return this.op;
  }

  public setFrom(from: string): OnlySetters<this> {
    this.from = from;
    return this;
  }
  public getFrom() {
    return this.from;
  }

  public setPath(path: string): OnlySetters<this> {
    this.path = path;
    return this;
  }
  public getPath() {
    return this.path;
  }

  public setValue(value: PatchValue): OnlySetters<this> {
    this.value = value;
    return this;
  }
  public getValue() {
    return this.value;
  }

  public override getFields<T extends PatchFields>() {
    return super._getFields<T>();
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
