/**
 * @see {@link https://leetcode.com/problems/jump-game-ii/}
 * @param {number[]} nums
 * @returns {number}
 */
export const jump = (nums) => {
  const jumps = [0];

  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = 1; j <= nums[i] && i + j < nums.length; j += 1) {
      jumps[i + j] = Math.min(jumps[i + j] ?? Infinity, jumps[i] + 1);
    }
  }

  return jumps.pop();
};
