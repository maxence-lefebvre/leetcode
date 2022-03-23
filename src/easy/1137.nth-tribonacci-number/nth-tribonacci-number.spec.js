import { tribonacci } from './nth-tribonacci-number';

describe('1137.nth-tribonacci-number', () => {
  it.each`
    n     | expected
    ${4}  | ${4}
    ${25} | ${1389537}
  `('tribonacci(n) = expected', ({ n, expected }) => {
    expect.hasAssertions();
    expect(tribonacci(n)).toBe(expected);
  });
});
