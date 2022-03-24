import { moveZeroes } from './move-zeroes';

describe('0283.move-zeroes', () => {
  it.each`
    input                  | expected
    ${[0, 1, 0, 3, 12]}    | ${[1, 3, 12, 0, 0]}
    ${[0, 1, 0, 0, 3, 12]} | ${[1, 3, 12, 0, 0, 0]}
    ${[0, 0, 0, 0, 1]}     | ${[1, 0, 0, 0, 0]}
    ${[0]}                 | ${[0]}
  `('should mutate $input to $expected', ({ input, expected }) => {
    expect.hasAssertions();

    moveZeroes(input);
    expect(input).toStrictEqual(expected);
  });
});
