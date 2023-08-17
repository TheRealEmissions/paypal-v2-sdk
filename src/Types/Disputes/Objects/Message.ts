import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { MessagePostedBy } from "../Enums/MessagePostedBy.js";
import { Document, TDocument } from "./Document.js";

export type TMessage = {
  content?: string;
  documents?: TDocument[];
  posted_by?: keyof typeof MessagePostedBy;
  time_posted?: string;
};

export class Message extends Utility implements Static<IUtility, typeof Message> {
  private content?: string;
  private documents?: Document[];
  private postedBy?: MessagePostedBy;
  private timePosted?: string;

  public setContent(content: string) {
    this.content = content;
    return this;
  }
  public getContent() {
    return this.content;
  }

  public setDocuments(...documents: Document[]): this;
  public setDocuments(...documents: ((document: OnlySetters<Document>) => void)[]): this;
  public setDocuments(...documents: (Document | ((document: OnlySetters<Document>) => void))[]) {
    this.documents = documents.map((document) => {
      if (document instanceof Document) return document;
      else {
        const newDocument = new Document();
        document(newDocument);
        return newDocument;
      }
    });
    return this;
  }
  public getDocuments() {
    return this.documents;
  }

  public setPostedBy(postedBy: MessagePostedBy): this;
  public setPostedBy(postedBy: (postedBy: typeof MessagePostedBy) => MessagePostedBy): this;
  public setPostedBy(postedBy: MessagePostedBy | ((postedBy: typeof MessagePostedBy) => MessagePostedBy)) {
    if (typeof postedBy === "function") this.postedBy = postedBy(MessagePostedBy);
    else this.postedBy = postedBy;
    return this;
  }
  public getPostedBy() {
    return this.postedBy;
  }

  public setTimePosted(timePosted: string) {
    this.timePosted = timePosted;
    return this;
  }
  public getTimePosted() {
    return this.timePosted;
  }

  public override getFields<T extends TMessage>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TMessage) {
    const message = new Message();
    if (obj.content) message.setContent(obj.content);
    if (obj.documents) message.setDocuments(...obj.documents.map(Document.fromObject));
    if (obj.posted_by) message.setPostedBy(MessagePostedBy[obj.posted_by]);
    if (obj.time_posted) message.setTimePosted(obj.time_posted);
    return message;
  }
}
