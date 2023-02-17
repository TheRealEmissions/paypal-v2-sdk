import Types from "../Types.js";
import Patch, { TPatch } from "./Patch.js";

export type TPatchRequest = {
  patch_request: TPatch[];
};

class PatchRequest extends Types {
  patchRequest?: Patch[];
  constructor() {
    super();
  }

  setPatchRequest(patchRequest: Patch[]) {
    this.patchRequest = patchRequest;
    return this;
  }

  override fromObject(obj: TPatchRequest) {
    if (obj.patch_request) {
      this.setPatchRequest(obj.patch_request.map((patch) => new Patch().fromObject(patch)));
    }

    return this;
  }
}

export default PatchRequest;
