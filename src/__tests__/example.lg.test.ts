import { it, describe } from "vitest";
import { smallMockExample } from "../mocks/sm";
import { largeMockExample } from "../mocks/lg";
import { mediumMockExample } from "../mocks/md";

describe("Large test suite!", () => {
  it("Anything", () => {
    smallMockExample();
  });
  it("Anything", async () => {
    await largeMockExample();
  });

  it("Anything", () => {
    mediumMockExample();
  });
});
