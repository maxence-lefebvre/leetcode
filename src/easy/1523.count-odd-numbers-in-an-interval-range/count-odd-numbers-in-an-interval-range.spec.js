import { countOdds } from './count-odd-numbers-in-an-interval-range';

describe('1523.count-odd-numbers-in-an-interval-range', () => {
  it.each`
    low  | high  | expected
    ${3} | ${7}  | ${3}
    ${8} | ${10} | ${1}
  `(
    'should return $expected odd numbers between $low and $high',
    ({ low, high, expected }) => {
      expect.hasAssertions();
      expect(countOdds(low, high)).toBe(expected);
    }
  );
});
