import Types from "../Types";

export type TDocument = {
  name?: string;
  url?: string;
};

class Document extends Types {
  name?: string;
  url?: string;
  constructor() {
    super();
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  override fromObject(obj: TDocument) {
    this.name = obj.name;
    this.url = obj.url;
    return this;
  }
}

export default Document;
