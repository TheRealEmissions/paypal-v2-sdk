import { Utility, IUtility, Static } from "../Utility.js";

export type TFileReference = {
  content_type?: string;
  create_time?: string;
  id?: string;
  reference_url?: string;
  size?: string;
};

export class FileReference extends Utility implements Static<IUtility, typeof FileReference> {
  private contentType?: string;
  private createTime?: string;
  private id?: string;
  private referenceUrl?: string;
  private size?: string;

  public setContentType(contentType: string) {
    this.contentType = contentType;
    return this;
  }
  public getContentType() {
    return this.contentType;
  }

  public setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }
  public getCreateTime() {
    return this.createTime;
  }

  public setId(id: string) {
    this.id = id;
    return this;
  }
  public getId() {
    return this.id;
  }

  public setReferenceUrl(referenceUrl: string) {
    this.referenceUrl = referenceUrl;
    return this;
  }
  public getReferenceUrl() {
    return this.referenceUrl;
  }

  public setSize(size: string) {
    this.size = size;
    return this;
  }
  public getSize() {
    return this.size;
  }

  public override getFields<T extends TFileReference>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TFileReference) {
    const fileReference = new FileReference();
    if (obj.content_type) fileReference.setContentType(obj.content_type);
    if (obj.create_time) fileReference.setCreateTime(obj.create_time);
    if (obj.id) fileReference.setId(obj.id);
    if (obj.reference_url) fileReference.setReferenceUrl(obj.reference_url);
    if (obj.size) fileReference.setSize(obj.size);
    return fileReference;
  }
}
