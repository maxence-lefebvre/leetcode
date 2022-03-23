/**
 * @see {@link https://leetcode.com/problems/fibonacci-number/}
 * @param {number} n
 * @returns {number}
 */
export const fib = (n) => {
  let [a, b] = [0, 1];
  for (let k = 0; k < n; k += 1) {
    [a, b] = [b, a + b];
  }
  return a;
};
