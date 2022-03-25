/**
 * @see {@link https://leetcode.com/problems/largest-perimeter-triangle/}
 * @param {number[]} nums
 * @returns {number}
 */
export const largestPerimeter = (nums) => {
  nums.sort((a, b) => b - a);

  for (let i = 2; i < nums.length; i += 1) {
    // a >= b >= c
    const [a, b, c] = nums.slice(i - 2, i + 1);
    // a necessary condition to have a non zero area triangle is a < b + c
    // we don't need to check other values "d" down the array because
    // d <= b, d <= c => d + c, b + d <= b + c <= a
    if (a < b + c) {
      return a + b + c;
    }
  }

  return 0;
};
