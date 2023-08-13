import { AssetSymbol } from "../Enums/AssetSymbol";
import Types, { ITypes, Static } from "../Types";

export type TCryptocurrency = {
  asset_symbol: keyof typeof AssetSymbol;
  quantity: string;
};

export class Cryptocurrency extends Types implements Static<ITypes, typeof Cryptocurrency> {
  assetSymbol!: AssetSymbol;
  quantity!: string;

  setAssetSymbol(assetSymbol: AssetSymbol): this;
  setAssetSymbol(assetSymbol: (assetSymbol: typeof AssetSymbol) => AssetSymbol): this;
  setAssetSymbol(assetSymbol: AssetSymbol | ((assetSymbol: typeof AssetSymbol) => AssetSymbol)) {
    if (typeof assetSymbol === "function") this.assetSymbol = assetSymbol(AssetSymbol);
    else this.assetSymbol = assetSymbol;
    return this;
  }

  setQuantity(quantity: string) {
    this.quantity = quantity;
    return this;
  }

  static fromObject(obj: TCryptocurrency) {
    const cryptocurrency = new Cryptocurrency();
    cryptocurrency.setAssetSymbol(AssetSymbol[obj.asset_symbol]);
    cryptocurrency.setQuantity(obj.quantity);
    return cryptocurrency;
  }
}
