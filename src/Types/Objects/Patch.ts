import { PatchOperation } from "../Enums/PatchOperation";
import Types from "../Types";

export type TPatch = {
  op: string;
  from?: string;
  path?: string;
  value?: number | string | boolean | null | Array<any> | object;
};

class Patch extends Types {
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

  override fromObject(obj: TPatch) {
    if (obj.op) {
      this.setOp(PatchOperation[obj.op as keyof typeof PatchOperation]);
    }

    if (obj.from) {
      this.setFrom(obj.from);
    }

    if (obj.path) {
      this.setPath(obj.path);
    }

    if (obj.value) {
      this.setValue(obj.value);
    }

    return this;
  }
}

export default Patch;
