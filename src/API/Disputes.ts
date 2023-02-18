import PayPal from "@/PayPal";
import ListDisputesResponse, { TListDisputesResponse } from "@Types/APIResponses/ListDisputes";
import PartialUpdateDisputeResponse, { TPartialUpdateDisputeResponse } from "@Types/APIResponses/PartialUpdateDispute";
import { DisputeState } from "@Types/Enums/DisputeState";
import Patch from "@Types/Objects/Patch";
import { TPatchRequest } from "@Types/Objects/PatchRequest";
import { Integer } from "@Types/Types";

class Disputes {
  protected PayPal: PayPal;
  constructor(PayPal: PayPal) {
    this.PayPal = PayPal;
  }

  /**
   *
   * @deprecated Use Disputes#getMany()
   */
  listDisputes(
    disputeState?: DisputeState,
    disputedTransactionId?: string,
    nextPageToken?: string,
    pageSize?: number,
    startTime?: string,
    updateTimeAfter?: string,
    updateTimeBefore?: string
  ) {
    return this.getMany(
      disputeState,
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
  ) {
    if ((disputedTransactionId?.length ?? 0) > 255) {
      throw new Error("disputedTransactionId must be less than 255 characters");
    }
    if ((nextPageToken?.length ?? 0) > 255) {
      throw new Error("nextPageToken must be less than 255 characters");
    }
    if (pageSize !== undefined) {
      if (!Number.isInteger(pageSize)) {
        throw new Error("pageSize must be an integer");
      }
      if (pageSize < 1 || pageSize > 50) {
        throw new Error("pageSize must be between 1 and 50");
      }
    }

    const response = await this.PayPal.API.get<TListDisputesResponse>("/v1/customer/disputes", {
      params: {
        ...(disputeState !== undefined ? { dispute_state: DisputeState[disputeState] } : {}),
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

  async partialUpdate(disputeId: string, patchRequest: Patch[]) {
    const response = await this.PayPal.API.patch<TPartialUpdateDisputeResponse>(`/v1/customer/disputes/${disputeId}`, {
      data: patchRequest.map((x) => x.toAttributeObject<TPatchRequest>()),
    });

    return PartialUpdateDisputeResponse.fromObject(response.data);
  }
}

export default Disputes;
