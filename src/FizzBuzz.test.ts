import { FizzBuzz } from "./FizzBuzz";

describe("Fizzbuzz", () => {
  let sut: FizzBuzz;
  beforeAll(() => {
    sut = new FizzBuzz();
  });
    test("1 should return 1", () => {
      const expected = '1';

      const actual = sut.play(1);

      expect(actual).toBe(expected);
    });

    test("3 should return FizzWhiz", () => {
      const expected = 'FizzWhiz';

      const actual = sut.play(3);

      expect(actual).toBe(expected);
    });


    test("5 should return BuzzWhiz", () => {
      const expected = 'BuzzWhiz';

      const actual = sut.play(5);

      expect(actual).toBe(expected);
    });

    test("15 should return FizzBuzz", () => {
      const expected = 'FizzBuzz';

      const actual = sut.play(15);

      expect(actual).toBe(expected);
    });
   
});
