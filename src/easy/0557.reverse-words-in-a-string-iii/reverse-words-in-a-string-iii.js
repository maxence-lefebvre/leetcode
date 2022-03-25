const mapWords = (s, mapper) => s.split(' ').map(mapper).join(' ');
const reverseWord = (w) => w.split('').reverse().join('');

/**
 * @see {@link https://leetcode.com/problems/reverse-words-in-a-string-iii/}
 * @param {string} s
 * @returns {string}
 */
export const reverseWords = (s) => mapWords(s, reverseWord);
