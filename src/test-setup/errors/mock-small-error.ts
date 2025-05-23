import { env, sizesTest } from "../constants";

class MockSmallError extends Error {
  constructor() {
    super(`Don't import "${sizesTest.SMALL}" mock in a "${env.size}" suite test`);

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this, this.constructor);
  }
}

export default MockSmallError;
