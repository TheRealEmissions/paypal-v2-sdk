import { IUtility, Static, Utility } from "../../Utility";

export type TCryptoTradeDetails = {
  trade_id?: string;
};

export class CryptoTradeDetails extends Utility implements Static<IUtility, typeof CryptoTradeDetails> {
  private tradeId?: string;

  public setTradeId(tradeId: string) {
    this.tradeId = tradeId;
    return this;
  }
  public getTradeId() {
    return this.tradeId;
  }

  public override getFields<T extends TCryptoTradeDetails>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCryptoTradeDetails) {
    const cryptoTradeDetails = new CryptoTradeDetails();
    if (obj.trade_id !== undefined) cryptoTradeDetails.setTradeId(obj.trade_id);
    return cryptoTradeDetails;
  }
}
