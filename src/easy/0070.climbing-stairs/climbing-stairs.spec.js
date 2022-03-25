import { climbStairs } from './climbing-stairs';

describe('0070.climbing-stairs', () => {
  it.each`
    input | expected
    ${2}  | ${2}
    ${3}  | ${3}
    ${4}  | ${5}
    ${5}  | ${8}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(climbStairs(input)).toBe(expected);
  });
});
