/**
 * @see {@link https://leetcode.com/problems/number-of-1-bits/}
 * @param {number} n
 * @returns {number}
 */
export const hammingWeight = (n) => {
  let count = 0;

  while (n > 0) {
    count += n % 2;
    // Beware! n is unsigned, so use >>> and not >>
    // eslint-disable-next-line no-param-reassign,no-bitwise
    n >>>= 1;
  }

  return count;
};
