import { twoSum } from './two-sum-ii-input-array-is-sorted';

describe('0167.two-sum-ii-input-array-is-sorted', () => {
  it.each`
    terms             | sum   | expected
    ${[2, 7, 11, 15]} | ${9}  | ${[1, 2]}
    ${[2, 3, 4]}      | ${6}  | ${[1, 3]}
    ${[-1, 0]}        | ${-1} | ${[1, 2]}
  `(
    'should return $expected when searching the sum $sum with terms from $terms',
    ({ terms, sum, expected }) => {
      expect.hasAssertions();
      expect(twoSum(terms, sum)).toStrictEqual(expected);
    }
  );
});
