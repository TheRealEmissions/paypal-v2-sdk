import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Patch, TPatch } from "./Patch.js";

export type TPatchRequest = {
  patch_request: TPatch[];
};

type PatchRequestFields = {
  readonly patchRequest?: Patch[];
};

export class PatchRequest extends Utility implements Static<IUtility, typeof PatchRequest> {
  private patchRequest?: Patch[];

  public setPatchRequest(...patchRequest: Patch[]): OnlySetters<this>;
  public setPatchRequest(...patchRequest: ((patch: OnlySetters<Patch>) => void)[]): OnlySetters<this>;
  public setPatchRequest(...patchRequest: (Patch | ((patch: OnlySetters<Patch>) => void))[]): OnlySetters<this> {
    this.patchRequest = patchRequest.map((patch) => {
      if (patch instanceof Patch) return patch;
      else {
        const p = new Patch();
        patch(p);
        return p;
      }
    });
    return this;
  }
  public getPatchRequest() {
    return this.patchRequest;
  }

  public override getFields<T extends PatchRequestFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TPatchRequest) {
    const patchRequest = new PatchRequest();
    if (obj.patch_request) patchRequest.setPatchRequest(...obj.patch_request.map((patch) => Patch.fromObject(patch)));
    return patchRequest;
  }
}
