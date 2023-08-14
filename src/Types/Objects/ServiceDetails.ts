import { ServiceStarted } from "../Enums/ServiceStarted.js";
import { IUtility, Static, Utility } from "../Utility.js";
import { SubReason, TSubReason } from "./SubReason";

export type TServiceDetails = {
  description?: string;
  note?: string;
  purchase_url?: string;
  service_started?: keyof typeof ServiceStarted;
  sub_reasons?: TSubReason[];
};

export class ServiceDetails extends Utility implements Static<IUtility, typeof ServiceDetails> {
  private description?: string;
  private note?: string;
  private purchaseUrl?: string;
  private serviceStarted?: ServiceStarted;
  private subReasons?: SubReason[];

  public setDescription(description: string) {
    this.description = description;
    return this;
  }
  public getDescription() {
    return this.description;
  }

  public setNote(note: string) {
    this.note = note;
    return this;
  }
  public getNote() {
    return this.note;
  }

  public setPurchaseUrl(purchaseUrl: string) {
    this.purchaseUrl = purchaseUrl;
    return this;
  }
  public getPurchaseUrl() {
    return this.purchaseUrl;
  }

  public setServiceStarted(serviceStarted: ServiceStarted): this;
  public setServiceStarted(serviceStarted: (serviceStarted: typeof ServiceStarted) => ServiceStarted): this;
  public setServiceStarted(
    serviceStarted: ServiceStarted | ((serviceStarted: typeof ServiceStarted) => ServiceStarted)
  ) {
    if (typeof serviceStarted === "function") this.serviceStarted = serviceStarted(ServiceStarted);
    else this.serviceStarted = serviceStarted;
    return this;
  }
  public getServiceStarted() {
    return this.serviceStarted;
  }

  public setSubReasons(...subReasons: SubReason[]): this;
  public setSubReasons(...subReasons: ((subReason: SubReason) => void)[]): this;
  public setSubReasons(...subReasons: (SubReason | ((subReason: SubReason) => void))[]) {
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
  public getSubReasons() {
    return this.subReasons;
  }

  public override getFields<T extends TServiceDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TServiceDetails) {
    const serviceDetails = new ServiceDetails();
    if (obj.description) serviceDetails.setDescription(obj.description);
    if (obj.note) serviceDetails.setNote(obj.note);
    if (obj.purchase_url) serviceDetails.setPurchaseUrl(obj.purchase_url);
    if (obj.service_started) serviceDetails.setServiceStarted(ServiceStarted[obj.service_started]);
    if (obj.sub_reasons) serviceDetails.setSubReasons(...obj.sub_reasons.map(SubReason.fromObject));
    return serviceDetails;
  }
}
