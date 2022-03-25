import { largestPerimeter } from './largest-perimeter-triangle';

describe('0976.largest-perimeter-triangle', () => {
  it.each`
    input        | expected
    ${[2, 1, 2]} | ${5}
    ${[1, 2, 1]} | ${0}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(largestPerimeter(input)).toBe(expected);
  });
});
