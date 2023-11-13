import { isBeforeNow } from "../src/function";

const BEFORE_TIME = "2022-01-10";

describe("Test Fucntion like moment() with fixed deps in low level", () => {
  it("should return true given parameter is 2022-10-10", () => {
    jest.spyOn(Date, "now").mockImplementation(() => {
      return new Date(2022, 1, 11, 10, 10, 0).getTime();
      //return new Date("2022-02-11T09:10:00.000Z").getTime();
    });

    const result = isBeforeNow(BEFORE_TIME);

    expect(result).toBeTruthy();
  });
});
