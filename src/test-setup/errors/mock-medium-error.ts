import { env, sizesTest } from "../constants";

class MockMediumError extends Error {
  constructor() {
    super(`Don't import "${sizesTest.MEDIUM}" mock in a "${env.size}" suite test`);

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this, this.constructor);
  }
}

export default MockMediumError;
