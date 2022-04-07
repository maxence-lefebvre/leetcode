/**
 * @see {@link https://leetcode.com/problems/jump-game/}
 * @param {number[]} nums
 * @returns {boolean}
 */
export const canJump = (nums) => {
  const target = nums.length - 1;

  if (target <= 0) {
    return true;
  }

  /*
   * Find zeroes, tag them safe if at least one previous item can "jump" over
   * pos(item) + nums[pos(item)] > pos(zero)
   * or reach the target index
   * pos(item) + nums[pos(item)] >= nums.length - 1
   */

  for (let i = target; i >= 0; i -= 1) {
    if (nums[i] === 0) {
      let safeZero = false;

      for (let j = i - 1; j >= 0 && !safeZero; j -= 1) {
        safeZero = nums[j] + j > i || nums[j] + j >= target;
      }

      if (!safeZero) {
        return false;
      }
    }
  }

  return true;
};
