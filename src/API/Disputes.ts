import PayPal from "../PayPal";
import ListDisputesResponse, { TListDisputesResponse } from "../Types/APIResponses/ListDisputes";
import PartialUpdateDisputeResponse, {
  TPartialUpdateDisputeResponse,
} from "../Types/APIResponses/PartialUpdateDispute";
import { DisputeState } from "../Types/Enums/DisputeState";
import { Patch } from "../Types/Objects/Patch";
import { TPatchRequest } from "../Types/Objects/PatchRequest";
import { Integer } from "../Types/Utility";

class Disputes {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @deprecated Use Disputes#getMany()
   */
  async listDisputes(
    disputeState?: DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: number,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<ListDisputesResponse>;
  async listDisputes(
    disputeState?: (disputeState: typeof DisputeState) => DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: number,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<ListDisputesResponse>;
  listDisputes(
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

  async getMany<N extends number>(
    disputeState?: DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: Integer<N>,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<ListDisputesResponse>;
  async getMany<N extends number>(
    disputeState?: (disputeState: typeof DisputeState) => DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: Integer<N>,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ): Promise<ListDisputesResponse>;
  async getMany<N extends number>(
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

    const response = await this.PayPal.API.get<TListDisputesResponse>("/v1/customer/disputes", {
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

    return ListDisputesResponse.fromObject(response.data);
  }

  async partialUpdate(disputeId: string, patchRequest: Patch[]): Promise<PartialUpdateDisputeResponse>;
  async partialUpdate(
    disputeId: string,
    patchRequest: ((patchRequest: Patch) => void)[]
  ): Promise<PartialUpdateDisputeResponse>;
  async partialUpdate(disputeId: string, patchRequest: (Patch | ((patchRequest: Patch) => void))[]) {
    const response = await this.PayPal.API.patch<TPartialUpdateDisputeResponse>(`/v1/customer/disputes/${disputeId}`, {
      data: patchRequest.map((x) => {
        if (x instanceof Patch) return x.toAttributeObject<TPatchRequest>();
        const patch = new Patch();
        x(patch);
        return patch.toAttributeObject<TPatchRequest>();
      }),
    });

    return PartialUpdateDisputeResponse.fromObject(response.data);
  }
}

export default Disputes;
