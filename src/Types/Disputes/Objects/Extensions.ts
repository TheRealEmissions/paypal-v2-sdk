import { MerchantContactedOutcomeMethod } from "../Enums/MerchantContactedOutcomeMethod.js";
import { IUtility, OnlySetters, Static, Utility } from "../../Utility.js";
import { BillingDisputeProperties, TBillingDisputeProperties } from "./BillingDisputeProperties.js";
import { MerchandiseDisputeProperties, TMerchandiseDisputeProperties } from "./MerchandiseDisputeProperties.js";
import { MerchantContactedOutcome } from "../Enums/MerchantContactedOutcome.js";

export type TExtensions = {
  billing_dispute_properties?: TBillingDisputeProperties;
  buyer_contacted_channel?: string;
  buyer_contacted_time?: string;
  merchandize_dispute_properties?: TMerchandiseDisputeProperties;
  merchant_contacted?: boolean;
  merchant_contacted_mode?: keyof typeof MerchantContactedOutcomeMethod;
  merchant_contacted_outcome?: keyof typeof MerchantContactedOutcome;
  merchant_contacted_time?: string;
};

type ExtensionsFields = {
  readonly billingDisputeProperties?: BillingDisputeProperties;
  readonly buyerContactedChannel?: string;
  readonly buyerContactedTime?: string;
  readonly merchandizeDisputeProperties?: MerchandiseDisputeProperties;
  readonly merchantContacted?: boolean;
  readonly merchantContactedMode?: MerchantContactedOutcomeMethod;
  readonly merchantContactedOutcome?: MerchantContactedOutcome;
  readonly merchantContactedTime?: string;
};

export class Extensions extends Utility implements Static<IUtility, typeof Extensions> {
  private billingDisputeProperties?: BillingDisputeProperties;
  private buyerContactedChannel?: string;
  private buyerContactedTime?: string;
  private merchandizeDisputeProperties?: MerchandiseDisputeProperties;
  private merchantContacted?: boolean;
  private merchantContactedMode?: MerchantContactedOutcomeMethod;
  private merchantContactedOutcome?: MerchantContactedOutcome;
  private merchantContactedTime?: string;

  public setBillingDisputeProperties(billingDisputeProperties: BillingDisputeProperties): this;
  public setBillingDisputeProperties(
    billingDisputeProperties: (billingDisputeProperties: OnlySetters<BillingDisputeProperties>) => void
  ): this;
  public setBillingDisputeProperties(
    billingDisputeProperties: BillingDisputeProperties | ((x: OnlySetters<BillingDisputeProperties>) => void)
  ) {
    if (billingDisputeProperties instanceof BillingDisputeProperties)
      this.billingDisputeProperties = billingDisputeProperties;
    else billingDisputeProperties((this.billingDisputeProperties = new BillingDisputeProperties()));
    return this;
  }
  public getBillingDisputeProperties() {
    return this.billingDisputeProperties;
  }

  public setBuyerContactedChannel(buyerContactedChannel: string) {
    this.buyerContactedChannel = buyerContactedChannel;
    return this;
  }
  public getBuyerContactedChannel() {
    return this.buyerContactedChannel;
  }

  public setBuyerContactedTime(buyerContactedTime: string) {
    this.buyerContactedTime = buyerContactedTime;
    return this;
  }
  public getBuyerContactedTime() {
    return this.buyerContactedTime;
  }

  public setMerchandizeDisputeProperties(merchandizeDisputeProperties: MerchandiseDisputeProperties): this;
  public setMerchandizeDisputeProperties(
    merchandizeDisputeProperties: (merchandizeDisputeProperties: OnlySetters<MerchandiseDisputeProperties>) => void
  ): this;
  public setMerchandizeDisputeProperties(
    merchandizeDisputeProperties:
      | MerchandiseDisputeProperties
      | ((x: OnlySetters<MerchandiseDisputeProperties>) => void)
  ) {
    if (merchandizeDisputeProperties instanceof MerchandiseDisputeProperties)
      this.merchandizeDisputeProperties = merchandizeDisputeProperties;
    else merchandizeDisputeProperties((this.merchandizeDisputeProperties = new MerchandiseDisputeProperties()));
    return this;
  }
  public getMerchandizeDisputeProperties() {
    return this.merchandizeDisputeProperties;
  }

  public setMerchantContacted(merchantContacted: boolean) {
    this.merchantContacted = merchantContacted;
    return this;
  }
  public getMerchantContacted() {
    return this.merchantContacted;
  }

  public setMerchantContactedMode(merchantContactedMode: MerchantContactedOutcomeMethod): this;
  public setMerchantContactedMode(
    merchantContactedMode: (
      merchantContactedMode: typeof MerchantContactedOutcomeMethod
    ) => MerchantContactedOutcomeMethod
  ): this;
  public setMerchantContactedMode(
    merchantContactedMode:
      | MerchantContactedOutcomeMethod
      | ((x: typeof MerchantContactedOutcomeMethod) => MerchantContactedOutcomeMethod)
  ) {
    if (typeof merchantContactedMode === "function")
      this.merchantContactedMode = merchantContactedMode(MerchantContactedOutcomeMethod);
    else this.merchantContactedMode = merchantContactedMode;
    return this;
  }
  public getMerchantContactedMode() {
    return this.merchantContactedMode;
  }

  public setMerchantContactedOutcome(merchantContactedOutcome: MerchantContactedOutcome): this;
  public setMerchantContactedOutcome(
    merchantContactedOutcome: (merchantContactedOutcome: typeof MerchantContactedOutcome) => MerchantContactedOutcome
  ): this;
  public setMerchantContactedOutcome(
    merchantContactedOutcome:
      | MerchantContactedOutcome
      | ((x: typeof MerchantContactedOutcome) => MerchantContactedOutcome)
  ) {
    if (typeof merchantContactedOutcome === "function")
      this.merchantContactedOutcome = merchantContactedOutcome(MerchantContactedOutcome);
    else this.merchantContactedOutcome = merchantContactedOutcome;
    return this;
  }
  public getMerchantContactedOutcome() {
    return this.merchantContactedOutcome;
  }

  public setMerchantContactedTime(merchantContactedTime: string) {
    this.merchantContactedTime = merchantContactedTime;
    return this;
  }
  public getMerchantContactedTime() {
    return this.merchantContactedTime;
  }

  public override getFields<T extends ExtensionsFields>() {
    return super._getFields<T>();
  }

  public static fromObject(obj: TExtensions) {
    const extensions = new Extensions();
    if (obj.billing_dispute_properties)
      extensions.setBillingDisputeProperties(BillingDisputeProperties.fromObject(obj.billing_dispute_properties));
    if (obj.buyer_contacted_channel) extensions.setBuyerContactedChannel(obj.buyer_contacted_channel);
    if (obj.buyer_contacted_time) extensions.setBuyerContactedTime(obj.buyer_contacted_time);
    if (obj.merchandize_dispute_properties)
      extensions.setMerchandizeDisputeProperties(
        MerchandiseDisputeProperties.fromObject(obj.merchandize_dispute_properties)
      );
    if (obj.merchant_contacted) extensions.setMerchantContacted(obj.merchant_contacted);
    if (obj.merchant_contacted_mode)
      extensions.setMerchantContactedMode(MerchantContactedOutcomeMethod[obj.merchant_contacted_mode]);
    if (obj.merchant_contacted_outcome)
      extensions.setMerchantContactedOutcome(MerchantContactedOutcome[obj.merchant_contacted_outcome]);
    if (obj.merchant_contacted_time) extensions.setMerchantContactedTime(obj.merchant_contacted_time);
    return extensions;
  }
}
