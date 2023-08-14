import { AssetSymbol } from "../Enums/AssetSymbol";
import { Utility, IUtility, Static } from "../Utility";

export type TCryptocurrency = {
  asset_symbol: keyof typeof AssetSymbol;
  quantity: string;
};

export class Cryptocurrency extends Utility implements Static<IUtility, typeof Cryptocurrency> {
  private assetSymbol!: AssetSymbol;
  private quantity!: string;

  public setAssetSymbol(assetSymbol: AssetSymbol): this;
  public setAssetSymbol(assetSymbol: (assetSymbol: typeof AssetSymbol) => AssetSymbol): this;
  public setAssetSymbol(assetSymbol: AssetSymbol | ((assetSymbol: typeof AssetSymbol) => AssetSymbol)) {
    if (typeof assetSymbol === "function") this.assetSymbol = assetSymbol(AssetSymbol);
    else this.assetSymbol = assetSymbol;
    return this;
  }
  public getAssetSymbol() {
    return this.assetSymbol;
  }

  public setQuantity(quantity: string) {
    this.quantity = quantity;
    return this;
  }
  public getQuantity() {
    return this.quantity;
  }

  public override getFields<T extends Partial<TCryptocurrency>>() {
    return super.getFields<T>();
  }

  public static fromObject(obj: TCryptocurrency) {
    const cryptocurrency = new Cryptocurrency();
    cryptocurrency.setAssetSymbol(AssetSymbol[obj.asset_symbol]);
    cryptocurrency.setQuantity(obj.quantity);
    return cryptocurrency;
  }
}
