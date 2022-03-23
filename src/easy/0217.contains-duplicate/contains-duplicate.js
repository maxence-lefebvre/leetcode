/**
 * @see {@link https://leetcode.com/problems/contains-duplicate/}
 * @param {number[]} nums
 * @returns {boolean}
 */
export const containsDuplicate = (nums) => {
  const seen = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (seen[nums[i]]) {
      return true;
    }
    seen[nums[i]] = true;
  }
  return false;
};
