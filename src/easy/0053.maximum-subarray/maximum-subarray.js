/**
 * @see {@link https://leetcode.com/problems/maximum-subarray}
 * @param {number[]} nums
 * @returns {number}
 */
export const maxSubArray = (nums) => {
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    max = Math.max(max, sum);
    sum = Math.max(sum, 0);
  }

  return max;
};
