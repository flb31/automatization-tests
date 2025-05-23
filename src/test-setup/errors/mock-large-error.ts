import { env, sizesTest } from "../constants";

class MockLargeError extends Error {
  constructor() {
    super(`Don't import "${sizesTest.LARGE}" mock in a "${env.size}" suite test`);

    Object.setPrototypeOf(this, new.target.prototype);

    Error.captureStackTrace(this, this.constructor);
  }
}

export default MockLargeError;
