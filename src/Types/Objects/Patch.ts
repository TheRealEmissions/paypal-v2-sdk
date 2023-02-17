import { PatchOperation } from "../Enums/PatchOperation.js";
import Types, { ITypes, StaticImplements } from "../Types.js";

export type TPatch = {
  op: keyof typeof PatchOperation;
  from?: string;
  path?: string;
  value?: number | string | boolean | null | Array<any> | object;
};

class Patch extends Types implements StaticImplements<ITypes, typeof Patch> {
  op?: PatchOperation;
  from?: string;
  path?: string;
  value?: number | string | boolean | null | Array<any> | object;
  constructor() {
    super();
  }

  setOp(op: PatchOperation) {
    this.op = op;
    return this;
  }

  setFrom(from: string) {
    this.from = from;
    return this;
  }

  setPath(path: string) {
    this.path = path;
    return this;
  }

  setValue(value: number | string | boolean | null | Array<any> | object) {
    this.value = value;
    return this;
  }

  static fromObject(obj: TPatch) {
    const patch = new Patch();
    if (obj.op) patch.setOp(PatchOperation[obj.op]);
    if (obj.from) patch.setFrom(obj.from);
    if (obj.path) patch.setPath(obj.path);
    if (obj.value) patch.setValue(obj.value);
    return patch;
  }
}

export default Patch;
