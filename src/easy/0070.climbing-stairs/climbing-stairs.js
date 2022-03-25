/**
 * n = 4
 * 1 + 1 + 1 + 1
 * // array of diag 1 (side length = n - 2)
 * 2 + 2
 * // array of diag 2 (side length = n - 1)
 * 2 + 1 + 1
 * 1 + 2 + 1
 * 1 + 1 + 2
 *
 * => 5
 */

/**
 * n = 5
 * 1 + 1 + 1 + 1 + 1
 * // array of diag 1 (side length = n - 2)
 * 1 + 2 + 2
 * 2 + 1 + 2
 * 2 + 2 + 1
 * // array of diag 2 (side length = n - 1)
 * 2 + 1 + 1 + 1
 * 1 + 2 + 1 + 1
 * 1 + 1 + 2 + 1
 * 1 + 1 + 1 + 2
 *
 * => 8
 * OMG IS IT FIBONACCI?
 */

/**
 * @see {@link https://leetcode.com/problems/climbing-stairs/}
 * @param {number} n
 * @returns {number}
 */
export const climbStairs = (n) => {
  let [a, b] = [1, 2];
  for (let k = 1; k < n; k += 1) {
    [a, b] = [b, a + b];
  }
  return a;
};
