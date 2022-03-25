import { maxProfit } from './best-time-to-buy-and-sell-stock';

describe('0121.best-time-to-buy-and-sell-stock', () => {
  it.each`
    input                 | expected
    ${[7, 1, 5, 3, 6, 4]} | ${5}
    ${[7, 6, 4, 3, 1]}    | ${0}
    ${[2, 4, 1]}          | ${2}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(maxProfit(input)).toBe(expected);
  });
});
