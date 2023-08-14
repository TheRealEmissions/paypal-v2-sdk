import APIError from "../APIError.js";

export class TrackerUpdateOrCancelError extends APIError {
  declare data: unknown;
}
