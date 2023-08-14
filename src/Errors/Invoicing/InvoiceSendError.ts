import { AxiosResponse } from "axios";
import APIError from "../APIError.js";

class InvoiceSendError extends APIError {
  declare data: AxiosResponse<unknown>;
}

export default InvoiceSendError;
