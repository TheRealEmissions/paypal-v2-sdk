import { MerchantContactedMode } from "../Enums/MerchantContactedMode";
import { MerchantContactedOutcome } from "../Enums/MerchantContactedOutcome";
import Types, { ITypes, Static } from "../Types";
import BillingDisputeProperties, { TBillingDisputeProperties } from "./BillingDisputeProperties";
import MerchandiseDisputeProperties, { TMerchandiseDisputeProperties } from "./MerchandiseDisputeProperties";

export type TExtensions = {
  billing_dispute_properties?: TBillingDisputeProperties;
  buyer_contacted_channel?: string;
  buyer_contacted_time?: string;
  merchandize_dispute_properties?: TMerchandiseDisputeProperties;
  merchant_contacted?: boolean;
  merchant_contacted_mode?: keyof typeof MerchantContactedMode;
  merchant_contacted_outcome?: keyof typeof MerchantContactedOutcome;
  merchant_contacted_time?: string;
};

class Extensions extends Types implements Static<ITypes, typeof Extensions> {
  billingDisputeProperties?: BillingDisputeProperties;
  buyerContactedChannel?: string;
  buyerContactedTime?: string;
  merchandizeDisputeProperties?: MerchandiseDisputeProperties;
  merchantContacted?: boolean;
  merchantContactedMode?: MerchantContactedMode;
  merchantContactedOutcome?: MerchantContactedOutcome;
  merchantContactedTime?: string;

  constructor() {
    super();
  }

  setBillingDisputeProperties(
    billingDisputeProperties: BillingDisputeProperties | ((x: BillingDisputeProperties) => void)
  ) {
    if (billingDisputeProperties instanceof BillingDisputeProperties)
      this.billingDisputeProperties = billingDisputeProperties;
    else billingDisputeProperties((this.billingDisputeProperties = new BillingDisputeProperties()));
    return this;
  }

  setBuyerContactedChannel(buyerContactedChannel: string) {
    this.buyerContactedChannel = buyerContactedChannel;
    return this;
  }

  setBuyerContactedTime(buyerContactedTime: string) {
    this.buyerContactedTime = buyerContactedTime;
    return this;
  }

  setMerchandizeDisputeProperties(
    merchandizeDisputeProperties: MerchandiseDisputeProperties | ((x: MerchandiseDisputeProperties) => void)
  ) {
    if (merchandizeDisputeProperties instanceof MerchandiseDisputeProperties)
      this.merchandizeDisputeProperties = merchandizeDisputeProperties;
    else merchandizeDisputeProperties((this.merchandizeDisputeProperties = new MerchandiseDisputeProperties()));
    return this;
  }

  setMerchantContacted(merchantContacted: boolean) {
    this.merchantContacted = merchantContacted;
    return this;
  }

  setMerchantContactedMode(
    merchantContactedMode: MerchantContactedMode | ((x: typeof MerchantContactedMode) => MerchantContactedMode)
  ) {
    if (typeof merchantContactedMode === "function")
      this.merchantContactedMode = merchantContactedMode(MerchantContactedMode);
    else this.merchantContactedMode = merchantContactedMode;
    return this;
  }

  setMerchantContactedOutcome(
    merchantContactedOutcome:
      | MerchantContactedOutcome
      | ((x: typeof MerchantContactedOutcome) => MerchantContactedOutcome)
  ) {
    if (typeof merchantContactedOutcome === "function")
      this.merchantContactedOutcome = merchantContactedOutcome(MerchantContactedOutcome);
    else this.merchantContactedOutcome = merchantContactedOutcome;
    return this;
  }

  setMerchantContactedTime(merchantContactedTime: string) {
    this.merchantContactedTime = merchantContactedTime;
    return this;
  }

  static fromObject(obj: TExtensions) {
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
      extensions.setMerchantContactedMode(MerchantContactedMode[obj.merchant_contacted_mode]);
    if (obj.merchant_contacted_outcome)
      extensions.setMerchantContactedOutcome(MerchantContactedOutcome[obj.merchant_contacted_outcome]);
    if (obj.merchant_contacted_time) extensions.setMerchantContactedTime(obj.merchant_contacted_time);
    return extensions;
  }
}

export default Extensions;
