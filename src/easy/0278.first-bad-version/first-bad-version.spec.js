import { solution } from './first-bad-version';

describe('0278.first-bad-version', () => {
  it.each`
    n    | expected
    ${5} | ${4}
  `('should return $expected', ({ expected, n }) => {
    expect.hasAssertions();
    expect(solution((x) => x >= expected)(n)).toBe(expected);
  });
});
