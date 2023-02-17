abstract class APIError extends Error {
  public readonly data: unknown;
  constructor(message: string, data: unknown) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.data = data;
  }
}

export default APIError;
