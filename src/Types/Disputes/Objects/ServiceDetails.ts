import { IUtility, Static, Utility } from "../../Utility.js";
import { ServiceDetailsServiceStarted } from "../Enums/ServiceDetailsServiceStarted.js";

export type TServiceDetails = {
  description?: string;
  note?: string;
  purchase_url?: string;
  service_started?: keyof typeof ServiceDetailsServiceStarted;
  sub_reasons?: string[];
};

export class ServiceDetails extends Utility implements Static<IUtility, typeof ServiceDetails> {
  private description?: string;
  private note?: string;
  private purchaseUrl?: string;
  private serviceStarted?: ServiceDetailsServiceStarted;
  private subReasons?: string[];

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

  public setServiceStarted(serviceStarted: ServiceDetailsServiceStarted): this;
  public setServiceStarted(
    serviceStarted: (serviceStarted: typeof ServiceDetailsServiceStarted) => ServiceDetailsServiceStarted
  ): this;
  public setServiceStarted(
    serviceStarted:
      | ServiceDetailsServiceStarted
      | ((serviceStarted: typeof ServiceDetailsServiceStarted) => ServiceDetailsServiceStarted)
  ) {
    if (typeof serviceStarted === "function") this.serviceStarted = serviceStarted(ServiceDetailsServiceStarted);
    else this.serviceStarted = serviceStarted;
    return this;
  }
  public getServiceStarted() {
    return this.serviceStarted;
  }

  public setSubReasons(...subReasons: string[]) {
    this.subReasons = subReasons;
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
    if (obj.service_started) serviceDetails.setServiceStarted(ServiceDetailsServiceStarted[obj.service_started]);
    if (obj.sub_reasons) serviceDetails.setSubReasons(...obj.sub_reasons);
    return serviceDetails;
  }
}
