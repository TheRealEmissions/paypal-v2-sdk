import PayPal from "../PayPal";
import { DisputeState } from "../Types/Enums/DisputeState";
import { AcceptOffer, TAcceptOffer } from "../Types/Objects/AcceptOffer";
import { Adjudicate, TAdjudicate } from "../Types/Objects/Adjudicate";
import { DenyOffer, TDenyOffer } from "../Types/Objects/DenyOffer";
import { Dispute, TDispute } from "../Types/Objects/Dispute";
import { DisputeSearch, TDisputeSearch } from "../Types/Objects/DisputeSearch";
import { Escalate, TEscalate } from "../Types/Objects/Escalate";
import { MakeOffer, TMakeOffer } from "../Types/Objects/MakeOffer";
import { Patch, TPatch } from "../Types/Objects/Patch";
import { RequireEvidenceRequest } from "../Types/Objects/RequireEvidenceRequest";
import { SubsequentAction, TSubsequentAction } from "../Types/Objects/SubsequentAction";
import { Integer } from "../Types/Utility";

export class Disputes {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @deprecated Use Disputes#getMany()
   */
  public async listDisputes(
    disputeState?: DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: number,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<DisputeSearch>;
  public async listDisputes(
    disputeState?: (disputeState: typeof DisputeState) => DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: number,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<DisputeSearch>;
  public async listDisputes(
    disputeState?: DisputeState | ((disputeState: typeof DisputeState) => DisputeState),
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: number,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ) {
    return this.getMany(
      typeof disputeState === "function" ? disputeState(DisputeState) : disputeState,
      disputedTransactionId,
      nextPageToken,
      pageSize,
      startTime,
      updateTimeAfter,
      updateTimeBefore
    );
  }

  public async getMany<N extends number>(
    disputeState?: DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: Integer<N>,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<DisputeSearch>;
  public async getMany<N extends number>(
    disputeState?: (disputeState: typeof DisputeState) => DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: Integer<N>,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<DisputeSearch>;
  public async getMany<N extends number>(
    disputeState?: DisputeState | ((disputeState: typeof DisputeState) => DisputeState),
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: Integer<N>,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ) {
    const MAX_LENGTH = 255;
    if ((disputedTransactionId?.length ?? 0) > MAX_LENGTH) {
      throw new Error("disputedTransactionId must be less than 255 characters");
    }
    if ((nextPageToken?.length ?? 0) > MAX_LENGTH) {
      throw new Error("nextPageToken must be less than 255 characters");
    }
    if (pageSize !== undefined) {
      if (!Number.isInteger(pageSize)) {
        throw new Error("pageSize must be an integer");
      }
      const MAX_PAGE_SIZE = 50;
      if (pageSize < 1 || pageSize > MAX_PAGE_SIZE) {
        throw new Error("pageSize must be between 1 and 50");
      }
    }

    const response = await this.PayPal.getAPI().get<TDisputeSearch>("/v1/customer/disputes", {
      params: {
        ...(disputeState !== undefined
          ? {
              dispute_state:
                DisputeState[typeof disputeState === "function" ? disputeState(DisputeState) : disputeState],
            }
          : {}),
        disputed_transaction_id: disputedTransactionId,
        next_page_token: nextPageToken,
        page_size: pageSize,
        start_time: startTime,
        update_time_after: updateTimeAfter,
        update_time_before: updateTimeBefore,
      },
    });

    return DisputeSearch.fromObject(response.data);
  }

  public async partiallyUpdate(disputeId: string, patchRequest: Patch[]): Promise<boolean>;
  public async partiallyUpdate(disputeId: string, patchRequest: ((patchRequest: Patch) => void)[]): Promise<boolean>;
  public async partiallyUpdate(disputeId: string, patchRequest: (Patch | ((patchRequest: Patch) => void))[]) {
    const response = await this.PayPal.getAPI().patch(`/v1/customer/disputes/${disputeId}`, {
      data: patchRequest.map((x) => {
        if (x instanceof Patch) return x.toAttributeObject<TPatch>();
        const patch = new Patch();
        x(patch);
        return patch.toAttributeObject<TPatch>();
      }),
    });

    return response.status === 204;
  }

  public async get(disputeId: string) {
    const response = await this.PayPal.getAPI().get<TDispute>(`/v1/customer/disputes/${disputeId}`);

    return Dispute.fromObject(response.data);
  }

  public async makeOffer(dispute: Dispute, offer: MakeOffer): Promise<SubsequentAction>;
  public async makeOffer(dispute: Dispute, offer: (offer: MakeOffer) => void): Promise<SubsequentAction>;
  public async makeOffer(dispute: string, offer: MakeOffer): Promise<SubsequentAction>;
  public async makeOffer(dispute: string, offer: (offer: MakeOffer) => void): Promise<SubsequentAction>;
  public async makeOffer(dispute: (dispute: Dispute) => void, offer: MakeOffer): Promise<SubsequentAction>;
  public async makeOffer(
    dispute: (dispute: Dispute) => void,
    offer: (offer: MakeOffer) => void
  ): Promise<SubsequentAction>;
  public async makeOffer(
    dispute: string | Dispute | ((dispute: Dispute) => void),
    offer: MakeOffer | ((offer: MakeOffer) => void)
  ) {
    const disputeInstance =
      typeof dispute === "string" ? await this.get(dispute) : typeof dispute === "function" ? new Dispute() : dispute;
    if (typeof dispute === "function") dispute(disputeInstance);
    const offerInstance = offer instanceof MakeOffer ? offer : new MakeOffer();
    if (typeof offer === "function") offer(offerInstance);

    const response = await this.PayPal.getAPI().post<TSubsequentAction>(
      `/v1/customer/disputes/${disputeInstance.getDisputeId()}/make-offer`,
      {
        data: offerInstance.toAttributeObject<TMakeOffer>(),
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to make offer");
    }
    return SubsequentAction.fromObject(response.data);
  }

  public async escalate(dispute: Dispute, note: Escalate): Promise<SubsequentAction>;
  public async escalate(dispute: Dispute, note: (note: Escalate) => void): Promise<SubsequentAction>;
  public async escalate(dispute: string, note: Escalate): Promise<SubsequentAction>;
  public async escalate(dispute: string, note: (note: Escalate) => void): Promise<SubsequentAction>;
  public async escalate(dispute: (dispute: Dispute) => void, note: Escalate): Promise<SubsequentAction>;
  public async escalate(dispute: (dispute: Dispute) => void, note: (note: Escalate) => void): Promise<SubsequentAction>;
  public async escalate(
    dispute: string | Dispute | ((dispute: Dispute) => void),
    note: Escalate | ((escalate: Escalate) => void)
  ): Promise<SubsequentAction> {
    const disputeInstance =
      typeof dispute === "string" ? await this.get(dispute) : typeof dispute === "function" ? new Dispute() : dispute;
    if (typeof dispute === "function") dispute(disputeInstance);
    const noteInstance = note instanceof Escalate ? note : new Escalate();
    if (typeof note === "function") note(noteInstance);

    const response = await this.PayPal.getAPI().post<TSubsequentAction>(
      `/v1/customer/disputes/${disputeInstance.getDisputeId()}/escalate`,
      {
        data: noteInstance.toAttributeObject<TEscalate>(),
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to escalate dispute");
    }
    return SubsequentAction.fromObject(response.data);
  }

  public async acceptOffer(dispute: Dispute, note: AcceptOffer): Promise<SubsequentAction>;
  public async acceptOffer(dispute: Dispute, note: (note: AcceptOffer) => void): Promise<SubsequentAction>;
  public async acceptOffer(dispute: string, note: AcceptOffer): Promise<SubsequentAction>;
  public async acceptOffer(dispute: string, note: (note: AcceptOffer) => void): Promise<SubsequentAction>;
  public async acceptOffer(dispute: (dispute: Dispute) => void, note: AcceptOffer): Promise<SubsequentAction>;
  public async acceptOffer(
    dispute: (dispute: Dispute) => void,
    note: (note: AcceptOffer) => void
  ): Promise<SubsequentAction>;
  public async acceptOffer(
    dispute: string | Dispute | ((dispute: Dispute) => void),
    note: AcceptOffer | ((note: AcceptOffer) => void)
  ) {
    const disputeInstance =
      typeof dispute === "string" ? await this.get(dispute) : typeof dispute === "function" ? new Dispute() : dispute;
    if (typeof dispute === "function") dispute(disputeInstance);
    const noteInstance = note instanceof AcceptOffer ? note : new AcceptOffer();
    if (typeof note === "function") note(noteInstance);

    const response = await this.PayPal.getAPI().post<TSubsequentAction>(
      `/v1/customer/disputes/${disputeInstance.getDisputeId()}/accept-offer`,
      {
        data: noteInstance.toAttributeObject<TAcceptOffer>(),
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to accept offer");
    }

    return SubsequentAction.fromObject(response.data);
  }

  public async updateDisputeStatus(dispute: Dispute, status: RequireEvidenceRequest): Promise<SubsequentAction>;
  public async updateDisputeStatus(
    dispute: Dispute,
    status: (status: RequireEvidenceRequest) => void
  ): Promise<SubsequentAction>;
  public async updateDisputeStatus(dispute: string, status: RequireEvidenceRequest): Promise<SubsequentAction>;
  public async updateDisputeStatus(
    dispute: string,
    status: (status: RequireEvidenceRequest) => void
  ): Promise<SubsequentAction>;
  public async updateDisputeStatus(
    dispute: (dispute: Dispute) => void,
    status: RequireEvidenceRequest
  ): Promise<SubsequentAction>;
  public async updateDisputeStatus(
    dispute: (dispute: Dispute) => void,
    status: (status: RequireEvidenceRequest) => void
  ): Promise<SubsequentAction>;
  public async updateDisputeStatus(
    dispute: string | Dispute | ((dispute: Dispute) => void),
    status: RequireEvidenceRequest | ((status: RequireEvidenceRequest) => void)
  ) {
    const disputeInstance =
      typeof dispute === "string" ? await this.get(dispute) : typeof dispute === "function" ? new Dispute() : dispute;
    if (typeof dispute === "function") dispute(disputeInstance);
    const statusInstance = status instanceof RequireEvidenceRequest ? status : new RequireEvidenceRequest();
    if (typeof status === "function") status(statusInstance);

    const response = await this.PayPal.getAPI().post<TSubsequentAction>(
      `/v1/customer/disputes/${disputeInstance.getDisputeId()}/require-evidence`,
      {
        data: statusInstance.toAttributeObject<RequireEvidenceRequest>(),
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to update dispute status");
    }

    return SubsequentAction.fromObject(response.data);
  }

  public async settle(dispute: Dispute, adjudicate: Adjudicate): Promise<SubsequentAction>;
  public async settle(dispute: Dispute, adjudicate: (adjudicate: Adjudicate) => void): Promise<SubsequentAction>;
  public async settle(dispute: string, adjudicate: Adjudicate): Promise<SubsequentAction>;
  public async settle(dispute: string, adjudicate: (adjudicate: Adjudicate) => void): Promise<SubsequentAction>;
  public async settle(dispute: (dispute: Dispute) => void, adjudicate: Adjudicate): Promise<SubsequentAction>;
  public async settle(
    dispute: (dispute: Dispute) => void,
    adjudicate: (adjudicate: Adjudicate) => void
  ): Promise<SubsequentAction>;
  public async settle(
    dispute: string | Dispute | ((dispute: Dispute) => void),
    adjudicate: Adjudicate | ((adjudicate: Adjudicate) => void)
  ) {
    const disputeInstance =
      typeof dispute === "string" ? await this.get(dispute) : typeof dispute === "function" ? new Dispute() : dispute;
    if (typeof dispute === "function") dispute(disputeInstance);
    const adjudicateInstance = adjudicate instanceof Adjudicate ? adjudicate : new Adjudicate();
    if (typeof adjudicate === "function") adjudicate(adjudicateInstance);

    const response = await this.PayPal.getAPI().post<TSubsequentAction>(
      `/v1/customer/disputes/${disputeInstance.getDisputeId()}/adjudicate`,
      {
        data: adjudicateInstance.toAttributeObject<TAdjudicate>(),
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to settle dispute");
    }

    return SubsequentAction.fromObject(response.data);
  }

  public async denyOffer(
    dispute: string | Dispute | ((dispute: Dispute) => void),
    note: DenyOffer | ((note: DenyOffer) => void)
  ) {
    const disputeInstance =
      typeof dispute === "string" ? await this.get(dispute) : typeof dispute === "function" ? new Dispute() : dispute;
    if (typeof dispute === "function") dispute(disputeInstance);
    const noteInstance = note instanceof DenyOffer ? note : new DenyOffer();
    if (typeof note === "function") note(noteInstance);

    const response = await this.PayPal.getAPI().post<TSubsequentAction>(
      `/v1/customer/disputes/${disputeInstance.getDisputeId()}/deny-offer`,
      {
        data: noteInstance.toAttributeObject<TDenyOffer>(),
      }
    );
    if (response.status !== 200) {
      throw new Error("Failed to deny offer");
    }

    return SubsequentAction.fromObject(response.data);
  }
}
