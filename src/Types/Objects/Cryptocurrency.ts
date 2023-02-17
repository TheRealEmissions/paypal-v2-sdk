import { AssetSymbol } from "../Enums/AssetSymbol";
import Types, { ITypes, StaticImplements } from "../Types";

export type TCryptocurrency = {
  asset_symbol: keyof typeof AssetSymbol;
  quantity: string;
};

class Cryptocurrency extends Types implements StaticImplements<ITypes, typeof Cryptocurrency> {
  assetSymbol!: AssetSymbol;
  quantity!: string;
  constructor() {
    super();
  }

  setAssetSymbol(assetSymbol: AssetSymbol) {
    this.assetSymbol = assetSymbol;
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

export default Cryptocurrency;
