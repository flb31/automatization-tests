import { beforeAll } from "vitest";
import MockMediumError from "../../test-setup/errors/mock-medium-error";
import { env, sizesTest } from "../../test-setup/constants";

beforeAll((ctx) => {
  if (![sizesTest.LARGE].includes(env.size) && /large.test.ts|small.test.ts/.test(ctx.name))
    throw new MockMediumError();
});

/**
 * Import mocks here
 */
export * from "./mediumMockExample";
