import { maxSubArray } from './maximum-subarray';

describe('0053.maximum-subarray', () => {
  it.each`
    input                              | expected
    ${[-2, 1, -3, 4, -1, 2, 1, -5, 4]} | ${6}
    ${[1]}                             | ${1}
    ${[5, 4, -1, 7, 8]}                | ${23}
  `('should return $expected with $input', ({ input, expected }) => {
    expect.hasAssertions();

    expect(maxSubArray(input)).toBe(expected);
  });
});
