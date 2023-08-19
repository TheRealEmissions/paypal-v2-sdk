import { Utility, IUtility, Static, OnlySetters } from "../../Utility";
import { CryptocurrencySymbol } from "../Enums/CryptocurrencySymbol";

export type TCryptocurrency = {
  asset_symbol: keyof typeof CryptocurrencySymbol;
  quantity: string;
};

type CryptocurrencyFields = {
  readonly assetSymbol?: CryptocurrencySymbol;
  readonly quantity?: string;
};

export class Cryptocurrency extends Utility implements Static<IUtility, typeof Cryptocurrency> {
  private assetSymbol!: CryptocurrencySymbol;
  private quantity!: string;

  public setAssetSymbol(assetSymbol: CryptocurrencySymbol): OnlySetters<this>;
  public setAssetSymbol(
    assetSymbol: (assetSymbol: typeof CryptocurrencySymbol) => CryptocurrencySymbol
  ): OnlySetters<this>;
  public setAssetSymbol(
    assetSymbol: CryptocurrencySymbol | ((assetSymbol: typeof CryptocurrencySymbol) => CryptocurrencySymbol)
  ): OnlySetters<this> {
    if (typeof assetSymbol === "function") this.assetSymbol = assetSymbol(CryptocurrencySymbol);
    else this.assetSymbol = assetSymbol;
    return this;
  }
  public getAssetSymbol() {
    return this.assetSymbol;
  }

  public setQuantity(quantity: string): OnlySetters<this> {
    this.quantity = quantity;
    return this;
  }
  public getQuantity() {
    return this.quantity;
  }

  public override getFields<T extends CryptocurrencyFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TCryptocurrency) {
    const cryptocurrency = new Cryptocurrency();
    cryptocurrency.setAssetSymbol(CryptocurrencySymbol[obj.asset_symbol]);
    cryptocurrency.setQuantity(obj.quantity);
    return cryptocurrency;
  }
}
