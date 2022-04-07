import { lastStoneWeight } from './last-stone-weight';

describe('1046.last-stone-weight', () => {
  it.each`
    input                 | expected
    ${[1]}                | ${1}
    ${[2, 7, 4, 1, 8, 1]} | ${1}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(lastStoneWeight(input)).toBe(expected);
  });
});
