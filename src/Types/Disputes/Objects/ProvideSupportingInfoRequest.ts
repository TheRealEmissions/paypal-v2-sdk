import { IUtility, Static, Utility } from "../../Utility";

export type TProvideSupportingInfoRequest = {
  notes: string;
};

type ProvideSupportingInfoRequestFields = {
  readonly notes?: string;
};

export class ProvideSupportingInfoRequest
  extends Utility
  implements Static<IUtility, typeof ProvideSupportingInfoRequest>
{
  private notes?: string;

  public setNotes(notes: string) {
    this.notes = notes;
    return this;
  }
  public getNotes() {
    return this.notes;
  }

  public override getFields<T extends ProvideSupportingInfoRequestFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TProvideSupportingInfoRequest) {
    const provideSupportingInfoRequest = new ProvideSupportingInfoRequest();
    if (obj.notes) provideSupportingInfoRequest.setNotes(obj.notes);
    return provideSupportingInfoRequest;
  }
}
