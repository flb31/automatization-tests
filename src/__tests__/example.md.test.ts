import { it, describe } from "vitest";
import { mediumMockExample } from "../mocks/md";
import { smallMockExample } from "../mocks/sm";
// import { largeMockExample } from "../mocks/large";

describe("Medium test suite", () => {
  it("Anything", () => {
    mediumMockExample();
  });

  it("Anything", () => {
    smallMockExample();
  });

  // it("Anything", () => {
  //   largeMockExample();
  // });
});
