import { isBeforeNow } from "../src/function";

jest.mock("moment", () => {
  return (...args: any[]) => {
    if (args.length > 0) {
      return jest.requireActual("moment")(...args);
    }
    return jest.requireActual("moment")("2022-12-12");
  };
});

const BEFORE_TIME = "2022-01-10";

describe("Test Fucntion like moment() with jest.mock", () => {
  it("should return true given parameter is 2022-10-10", () => {
    const result = isBeforeNow(BEFORE_TIME);

    expect(result).toBeTruthy();
  });
});
