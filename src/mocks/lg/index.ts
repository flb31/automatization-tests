import { beforeAll } from "vitest";
import MockLargeError from "../../test-setup/errors/mock-large-error";

beforeAll((ctx) => {
  if (/small.test.ts|medium.test.ts/.test(ctx.name)) throw new MockLargeError();
});

/**
 * Import mocks here
 */
export * from "./largeMockExample";
