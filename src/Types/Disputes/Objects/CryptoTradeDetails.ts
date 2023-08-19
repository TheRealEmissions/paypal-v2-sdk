import { IUtility, OnlySetters, Static, Utility } from "../../Utility";

export type TCryptoTradeDetails = {
  trade_id?: string;
};

type CryptoTradeDetailsFields = {
  readonly tradeId?: string;
};

export class CryptoTradeDetails extends Utility implements Static<IUtility, typeof CryptoTradeDetails> {
  private tradeId?: string;

  public setTradeId(tradeId: string): OnlySetters<this> {
    this.tradeId = tradeId;
    return this;
  }
  public getTradeId() {
    return this.tradeId;
  }

  public override getFields<T extends CryptoTradeDetailsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TCryptoTradeDetails) {
    const cryptoTradeDetails = new CryptoTradeDetails();
    if (obj.trade_id !== undefined) cryptoTradeDetails.setTradeId(obj.trade_id);
    return cryptoTradeDetails;
  }
}
