import { twoSum } from './two-sum';

describe('0001.two-sum', () => {
  it.each`
    terms             | sum  | expected
    ${[2, 7, 11, 15]} | ${9} | ${[0, 1]}
    ${[3, 2, 4]}      | ${6} | ${[1, 2]}
    ${[3, 3]}         | ${6} | ${[0, 1]}
  `(
    'should return $expected when searching for sum $sum in terms $terms',
    ({ terms, sum, expected }) => {
      expect.hasAssertions();

      expect(twoSum(terms, sum)).toStrictEqual(expected);
    }
  );
});
