/**
 * @see {@link https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/}
 * @param {number} n
 * @return {number}
 */
export const subtractProductAndSum = (n) => {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    const d = n % 10;
    sum += d;
    product *= d;
    // eslint-disable-next-line no-param-reassign
    n = Math.floor(n / 10);
  }

  return product - sum;
};
