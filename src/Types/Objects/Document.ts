import Types, { ITypes, Static } from "../Types";

export type TDocument = {
  name?: string;
  url?: string;
};

export class Document extends Types implements Static<ITypes, typeof Document> {
  name?: string;
  url?: string;

  setName(name: string) {
    this.name = name;
    return this;
  }

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  static fromObject(obj: TDocument) {
    const document = new Document();
    if (obj.name) document.setName(obj.name);
    if (obj.url) document.setUrl(obj.url);
    return document;
  }
}
