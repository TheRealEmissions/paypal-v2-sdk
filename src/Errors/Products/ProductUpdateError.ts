import APIError from "../APIError";

export class ProductUpdateError extends APIError {
  declare data: unknown;
}
