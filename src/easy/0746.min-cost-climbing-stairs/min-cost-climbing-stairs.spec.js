import { minCostClimbingStairs } from './min-cost-climbing-stairs';

describe('0746.min-cost-climbing-stairs', () => {
  it.each`
    input                                   | expected
    ${[10, 15, 20]}                         | ${15}
    ${[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]} | ${6}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(minCostClimbingStairs(input)).toBe(expected);
  });
});
