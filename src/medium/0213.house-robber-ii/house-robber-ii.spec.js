import { rob } from './house-robber-ii';

describe('0213.house-robber-ii', () => {
  it.each`
    input           | expected
    ${[0]}          | ${0}
    ${[2]}          | ${2}
    ${[2, 1]}       | ${2}
    ${[1, 2]}       | ${2}
    ${[2, 3, 2]}    | ${3}
    ${[1, 2, 3, 1]} | ${4}
    ${[1, 2, 3]}    | ${3}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(rob(input)).toBe(expected);
  });
});
