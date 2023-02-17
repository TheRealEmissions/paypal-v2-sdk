import Types, { ITypes, StaticImplements } from "../Types.js";
import Patch, { TPatch } from "./Patch.js";

export type TPatchRequest = {
  patch_request: TPatch[];
};

class PatchRequest extends Types implements StaticImplements<ITypes, typeof PatchRequest> {
  patchRequest?: Patch[];
  constructor() {
    super();
  }

  setPatchRequest(patchRequest: Patch[]) {
    this.patchRequest = patchRequest;
    return this;
  }

  static fromObject(obj: TPatchRequest) {
    const patchRequest = new PatchRequest();
    if (obj.patch_request) patchRequest.setPatchRequest(obj.patch_request.map((patch) => Patch.fromObject(patch)));
    return patchRequest;
  }
}

export default PatchRequest;
