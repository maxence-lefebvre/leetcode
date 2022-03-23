import { fib } from './fibonacci-number';

describe('0509.fibonacci-number', () => {
  it.each`
    n    | expected
    ${2} | ${1}
    ${3} | ${2}
    ${4} | ${3}
  `('fib($n) = $expected', ({ n, expected }) => {
    expect.hasAssertions();
    expect(fib(n)).toBe(expected);
  });
});
