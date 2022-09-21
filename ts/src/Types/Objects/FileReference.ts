import PayPal from "../../PayPal";
import Types from "../Types";

class FileReference extends Types {
  contentType: string;
  createTime: string;
  id: string;
  referenceUrl: string;
  size: string;
  constructor(PayPal: PayPal) {
    super(PayPal);
  }

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
}

export default FileReference;
