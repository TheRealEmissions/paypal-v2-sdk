import { AxiosResponse } from "axios";
import APIError from "../APIError.js";

export class InvoiceSendError extends APIError {
  declare data: AxiosResponse<unknown>;
}
