import { jump } from './jump-game-ii';

describe('0045.jump-game-ii', () => {
  it.each`
    input              | expected
    ${[2, 3, 1, 1, 4]} | ${2}
    ${[2, 3, 0, 1, 4]} | ${2}
    ${[2, 3, 1]}       | ${1}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(jump(input)).toBe(expected);
  });
});
