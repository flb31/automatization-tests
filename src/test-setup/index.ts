import TestSuiteError from "./test-suite-error";
import { sizesTest, env } from "./constants";

const sizeValue = Object.values(sizesTest);
if (!sizeValue.includes(env.size)) {
  throw new TestSuiteError(`${env.size} is not a size available. Only "${sizeValue}"`);
}
