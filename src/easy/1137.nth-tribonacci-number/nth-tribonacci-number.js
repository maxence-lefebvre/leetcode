/**
 * @see {@link https://leetcode.com/problems/n-th-tribonacci-number/}
 * @param {number} n
 * @returns {number}
 */
export const tribonacci = (n) => {
  let [a, b, c] = [0, 1, 1];
  for (let k = 0; k < n; k += 1) {
    [a, b, c] = [b, c, a + b + c];
  }
  return a;
};
