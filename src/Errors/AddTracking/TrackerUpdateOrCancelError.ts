import APIError from "../APIError.js";

class TrackerUpdateOrCancelError extends APIError {
  declare data: unknown;
}

export default TrackerUpdateOrCancelError;
