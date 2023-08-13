import Types, { ITypes, Static } from "../Types.js";

export type TFileReference = {
  content_type?: string;
  create_time?: string;
  id?: string;
  reference_url?: string;
  size?: string;
};

export class FileReference extends Types implements Static<ITypes, typeof FileReference> {
  contentType?: string;
  createTime?: string;
  id?: string;
  referenceUrl?: string;
  size?: string;

  setContentType(contentType: string) {
    this.contentType = contentType;
    return this;
  }

  setCreateTime(createTime: string) {
    this.createTime = createTime;
    return this;
  }

  setId(id: string) {
    this.id = id;
    return this;
  }

  setReferenceUrl(referenceUrl: string) {
    this.referenceUrl = referenceUrl;
    return this;
  }

  setSize(size: string) {
    this.size = size;
    return this;
  }

  static fromObject(obj: TFileReference) {
    const fileReference = new FileReference();
    if (obj.content_type) fileReference.setContentType(obj.content_type);
    if (obj.create_time) fileReference.setCreateTime(obj.create_time);
    if (obj.id) fileReference.setId(obj.id);
    if (obj.reference_url) fileReference.setReferenceUrl(obj.reference_url);
    if (obj.size) fileReference.setSize(obj.size);
    return fileReference;
  }
}
