/**
 * @see {@link https://leetcode.com/problems/count-odd-numbers-in-an-interval-range}
 * @param {number} low
 * @param {number} high
 * @returns {number}
 */
export const countOdds = (low, high) => {
  return (high - low + (high % 2 === 1) + (low % 2 === 1)) / 2;
};
