import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe('0003.longest-substring-without-repeating-characters', () => {
  it.each`
    input         | expected
    ${'abcabcbb'} | ${3}
    ${'bbbbb'}    | ${1}
    ${'pwwkew'}   | ${3}
    ${' '}        | ${1}
    ${'dvdf'}     | ${3}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(lengthOfLongestSubstring(input)).toBe(expected);
  });
});
