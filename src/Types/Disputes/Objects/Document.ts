import { Utility, IUtility, Static } from "../../Utility";

export type TDocument = {
  name?: string;
  url?: string;
};

export class Document extends Utility implements Static<IUtility, typeof Document> {
  private name?: string;
  private url?: string;

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setUrl(url: string) {
    this.url = url;
    return this;
  }
  public getUrl() {
    return this.url;
  }

  public override getFields<T extends TDocument>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TDocument) {
    const document = new Document();
    if (obj.name) document.setName(obj.name);
    if (obj.url) document.setUrl(obj.url);
    return document;
  }
}
