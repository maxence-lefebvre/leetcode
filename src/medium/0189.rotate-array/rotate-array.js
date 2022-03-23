/**
 * @see {@link https://leetcode.com/problems/rotate-array/}
 * @param {number[]} nums
 * @param {number} k
 * @returns {void} - mutates nums.
 */
export const rotate = (nums, k) => {
  const rotationLength = k % nums.length;

  const swap = nums.splice(nums.length - rotationLength);
  nums.splice(0, 0, ...swap);
};
