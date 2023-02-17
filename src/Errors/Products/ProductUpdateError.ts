import APIError from "../APIError";

class ProductUpdateError extends APIError {
  declare data: unknown;
  constructor(message: string, data: unknown) {
    super(message, data);
  }
}

export default ProductUpdateError;
