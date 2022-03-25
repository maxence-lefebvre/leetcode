import { reverseString } from './reverse-string';

describe('0344.reverse-string', () => {
  it.each`
    input                             | expected
    ${['h', 'e', 'l', 'l', 'o']}      | ${['o', 'l', 'l', 'e', 'h']}
    ${['H', 'a', 'n', 'n', 'a', 'h']} | ${['h', 'a', 'n', 'n', 'a', 'H']}
  `('should mutate $input to $expected', ({ input, expected }) => {
    expect.hasAssertions();

    reverseString(input);

    expect(input).toStrictEqual(expected);
  });
});
