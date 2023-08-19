import { Utility, IUtility, Static, OnlySetters } from "../../Utility.js";
import { Money, TMoney } from "./Money.js";

export type TTax = {
  name: string;
  percent: string;
  readonly amount?: TMoney;
};

type TaxFields = {
  readonly name?: string;
  readonly percent?: string;
  readonly amount?: Money;
};

export class Tax extends Utility implements Static<IUtility, typeof Tax> {
  private name?: string;
  private percent?: string;
  private amount?: Money;

  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getName() {
    return this.name;
  }

  public setPercent(percent: string) {
    const regex = new RegExp(/^((-?\d+)|(-?(\d+)?[.]\d+))$/);
    if (!regex.test(percent)) {
      throw new Error("Invalid percent");
    }
    const MAX_PERCENT = 100;
    if (parseFloat(percent) < 0 || parseFloat(percent) > MAX_PERCENT) {
      throw new Error("Invalid percent");
    }
    this.percent = percent;
    return this;
  }
  public getPercent() {
    return this.percent;
  }

  public setAmount(amount: Money): this;
  public setAmount(amount: (money: OnlySetters<Money>) => void): this;
  public setAmount(amount: Money | ((money: OnlySetters<Money>) => void)) {
    if (amount instanceof Money) {
      this.amount = amount;
    } else {
      const money = new Money();
      amount(money);
      this.amount = money;
    }
    return this;
  }
  public getAmount() {
    return this.amount;
  }

  public override getFields<T extends Partial<TaxFields>>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TTax) {
    const tax = new Tax();
    if (obj.name) tax.setName(obj.name);
    if (obj.percent) tax.setPercent(obj.percent);
    if (obj.amount) tax.setAmount(Money.fromObject(obj.amount));
    return tax;
  }
}
