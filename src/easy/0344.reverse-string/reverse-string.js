/**
 * @typedef {string} character
 */

/**
 * Mutates s.
 * @see {@link https://leetcode.com/problems/reverse-string}
 * @param {character[]} s
 * @returns {void}
 */
export const reverseString = (s) => {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    // eslint-disable-next-line no-param-reassign
    [s[i], s[j]] = [s[j], s[i]];
    i += 1;
    j -= 1;
  }
};
