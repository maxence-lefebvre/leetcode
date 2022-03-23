import { sortedSquares } from './squares-of-a-sorted-array';

describe('0977.squares-of-a-sorted-array', () => {
  it.each`
    input                 | expected
    ${[-4, -1, 0, 3, 10]} | ${[0, 1, 9, 16, 100]}
    ${[-7, -3, 2, 3, 11]} | ${[4, 9, 9, 49, 121]}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(sortedSquares(input)).toStrictEqual(expected);
  });
});
