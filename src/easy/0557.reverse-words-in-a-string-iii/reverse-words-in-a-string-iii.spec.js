import { reverseWords } from './reverse-words-in-a-string-iii';

describe('0557.reverse-words-in-a-string-iii', () => {
  it.each`
    input                            | expected
    ${"Let's take LeetCode contest"} | ${"s'teL ekat edoCteeL tsetnoc"}
    ${'God Ding'}                    | ${'doG gniD'}
  `('should return $expected', ({ input, expected }) => {
    expect.hasAssertions();
    expect(reverseWords(input)).toBe(expected);
  });
});
