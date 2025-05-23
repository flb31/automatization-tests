import { beforeAll } from "vitest";
import MockSmallError from "../../test-setup/errors/mock-small-error";
import { env, sizesTest } from "../../test-setup/constants";

beforeAll((ctx) => {
  if (![sizesTest.MEDIUM, sizesTest.LARGE].includes(env.size) && /medium.test.ts|large.test.ts/.test(ctx.name))
    throw new MockSmallError();
});

/**
 * Import mocks here
 */
export * from "./smallMockExample";
