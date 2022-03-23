import { containsDuplicate } from './contains-duplicate';

describe('0217.contains-duplicate', () => {
  it.each`
    input                             | expected
    ${[1, 2, 3, 1]}                   | ${true}
    ${[1, 2, 3, 4]}                   | ${false}
    ${[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]} | ${true}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();

    expect(containsDuplicate(input)).toBe(expected);
  });
});
