import Types from "../Types";
import Patch, { TPatch } from "./Patch";

export type TPatchRequest = {
  patch_request: Array<TPatch>;
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
