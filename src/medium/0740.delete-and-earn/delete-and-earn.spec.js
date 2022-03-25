import { deleteAndEarn } from './delete-and-earn';

describe('0740.delete-and-earn', () => {
  it.each`
    input                 | expected
    ${[3, 4, 2]}          | ${6}
    ${[2, 2, 3, 3, 3, 4]} | ${9}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(deleteAndEarn(input)).toBe(expected);
  });
});
