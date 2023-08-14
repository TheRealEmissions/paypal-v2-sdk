import { MessageAuthor } from "../Enums/MessageAuthor";
import Types, { ITypes, Static } from "../Types";
import Document, { TDocument } from "./Document";

export type TMessage = {
  content?: string;
  documents?: TDocument[];
  posted_by?: keyof typeof MessageAuthor;
  time_posted?: string;
};

class Message extends Types implements Static<ITypes, typeof Message> {
  content?: string;
  documents?: Document[];
  postedBy?: MessageAuthor;
  timePosted?: string;

  constructor() {
    super();
  }

  setContent(content: string) {
    this.content = content;
    return this;
  }

  setDocuments(...documents: (Document | ((document: Document) => void))[]) {
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

  setPostedBy(postedBy: MessageAuthor | ((postedBy: typeof MessageAuthor) => MessageAuthor)) {
    if (typeof postedBy === "function") this.postedBy = postedBy(MessageAuthor);
    else this.postedBy = postedBy;
    return this;
  }

  setTimePosted(timePosted: string) {
    this.timePosted = timePosted;
    return this;
  }

  static fromObject(obj: TMessage) {
    const message = new Message();
    if (obj.content) message.setContent(obj.content);
    if (obj.documents) message.setDocuments(...obj.documents.map(Document.fromObject));
    if (obj.posted_by) message.setPostedBy(MessageAuthor[obj.posted_by]);
    if (obj.time_posted) message.setTimePosted(obj.time_posted);
    return message;
  }
}

export default Message;
