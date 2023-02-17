import Types, { ITypes, Static } from "../Types.js";
import Patch, { TPatch } from "./Patch.js";

export type TPatchRequest = {
  patch_request: TPatch[];
};

class PatchRequest extends Types implements Static<ITypes, typeof PatchRequest> {
  patchRequest?: Patch[];
  constructor() {
    super();
  }

  setPatchRequest(...patchRequest: (Patch | ((patch: Patch) => void))[]) {
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

  static fromObject(obj: TPatchRequest) {
    const patchRequest = new PatchRequest();
    if (obj.patch_request) patchRequest.setPatchRequest(...obj.patch_request.map((patch) => Patch.fromObject(patch)));
    return patchRequest;
  }
}

export default PatchRequest;
