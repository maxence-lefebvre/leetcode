import { canJump } from './jump-game';

describe('0055.jump-game', () => {
  it.each`
    input                 | expected
    ${[2, 3, 0, 1, 1, 4]} | ${true}
    ${[3, 2, 1, 0, 4]}    | ${false}
    ${[0, 1]}             | ${false}
    ${[0]}                | ${true}
    ${[2, 0]}             | ${true}
    ${[2, 0, 0]}          | ${true}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(canJump(input)).toBe(expected);
  });
});
