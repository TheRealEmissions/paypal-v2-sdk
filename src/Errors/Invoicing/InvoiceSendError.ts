import { AxiosResponse } from "axios";
import APIError from "@Errors/APIError.js";

class InvoiceSendError extends APIError {
  declare data: AxiosResponse<unknown, any>;
  constructor(message: string, data: AxiosResponse<unknown, any>) {
    super(message, data);
  }
}

export default InvoiceSendError;
