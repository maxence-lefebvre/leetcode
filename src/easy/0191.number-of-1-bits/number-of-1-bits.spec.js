import { hammingWeight } from './number-of-1-bits';

describe('0191.number-of-1-bits', () => {
  it.each`
    input                                 | expected
    ${'00000000000000000000000000001011'} | ${3}
    ${'00000000000000000000000010000000'} | ${1}
    ${'11111111111111111111111111111101'} | ${31}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(hammingWeight(parseInt(input, 2))).toBe(expected);
  });
});
