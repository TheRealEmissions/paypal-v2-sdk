import APIError from "../APIError";

class ProductUpdateError extends APIError {
  declare data: unknown;
}

export default ProductUpdateError;
