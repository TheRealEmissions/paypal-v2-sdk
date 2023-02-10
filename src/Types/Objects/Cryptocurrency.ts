import { AssetSymbol } from "../Enums/AssetSymbol";
import Types from "../Types";

export type TCryptocurrency = {
  asset_symbol: string;
  quantity: string;
};

class Cryptocurrency extends Types {
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

  override fromObject(obj: TCryptocurrency) {
    this.assetSymbol = AssetSymbol[obj.asset_symbol as keyof typeof AssetSymbol];
    this.quantity = obj.quantity;
    return this;
  }
}

export default Cryptocurrency;
