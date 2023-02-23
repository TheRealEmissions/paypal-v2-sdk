import { ServiceStarted } from "../Enums/ServiceStarted";
import Types, { ITypes, Static } from "../Types";
import SubReason, { TSubReason } from "./SubReason";

export type TServiceDetails = {
  description?: string;
  note?: string;
  purchase_url?: string;
  service_started?: keyof typeof ServiceStarted;
  sub_reasons?: TSubReason[];
};

class ServiceDetails extends Types implements Static<ITypes, typeof ServiceDetails> {
  description?: string;
  note?: string;
  purchaseUrl?: string;
  serviceStarted?: ServiceStarted;
  subReasons?: SubReason[];

  constructor() {
    super();
  }

  setDescription(description: string) {
    this.description = description;
    return this;
  }

  setNote(note: string) {
    this.note = note;
    return this;
  }

  setPurchaseUrl(purchaseUrl: string) {
    this.purchaseUrl = purchaseUrl;
    return this;
  }

  setServiceStarted(serviceStarted: ServiceStarted | ((serviceStarted: typeof ServiceStarted) => ServiceStarted)) {
    if (typeof serviceStarted === "function") this.serviceStarted = serviceStarted(ServiceStarted);
    else this.serviceStarted = serviceStarted;
    return this;
  }

  setSubReasons(...subReasons: (SubReason | ((subReason: SubReason) => void))[]) {
    this.subReasons = subReasons.map((subReason) => {
      if (subReason instanceof SubReason) return subReason;
      else {
        const newSubReason = new SubReason();
        subReason(newSubReason);
        return newSubReason;
      }
    });
    return this;
  }

  static fromObject(obj: TServiceDetails) {
    const serviceDetails = new ServiceDetails();
    if (obj.description) serviceDetails.setDescription(obj.description);
    if (obj.note) serviceDetails.setNote(obj.note);
    if (obj.purchase_url) serviceDetails.setPurchaseUrl(obj.purchase_url);
    if (obj.service_started) serviceDetails.setServiceStarted(ServiceStarted[obj.service_started]);
    if (obj.sub_reasons) serviceDetails.setSubReasons(...obj.sub_reasons.map(SubReason.fromObject));
    return serviceDetails;
  }
}

export default ServiceDetails;
