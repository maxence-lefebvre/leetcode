import { rob } from './house-robber';

describe('0198.house-robber', () => {
  it.each`
    input              | expected
    ${[0]}             | ${0}
    ${[2, 1]}          | ${2}
    ${[2, 1, 1, 2]}    | ${4}
    ${[1, 2, 3, 1]}    | ${4}
    ${[2, 7, 9, 3, 1]} | ${12}
    ${[2, 7, 9, 6, 1]} | ${13}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(rob(input)).toBe(expected);
  });
});
