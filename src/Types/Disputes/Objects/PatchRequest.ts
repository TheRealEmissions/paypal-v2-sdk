import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Patch, TPatch } from "./Patch.js";

export type TPatchRequest = {
  patch_request: TPatch[];
};

export class PatchRequest extends Utility implements Static<IUtility, typeof PatchRequest> {
  private patchRequest?: Patch[];

  public setPatchRequest(...patchRequest: Patch[]): this;
  public setPatchRequest(...patchRequest: ((patch: OnlySetters<Patch>) => void)[]): this;
  public setPatchRequest(...patchRequest: (Patch | ((patch: OnlySetters<Patch>) => void))[]) {
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

  public override getFields<T extends Partial<TPatchRequest>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TPatchRequest) {
    const patchRequest = new PatchRequest();
    if (obj.patch_request) patchRequest.setPatchRequest(...obj.patch_request.map((patch) => Patch.fromObject(patch)));
    return patchRequest;
  }
}
