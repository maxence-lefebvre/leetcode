/**
 * @see {@link https://leetcode.com/problems/move-zeroes/}
 * @param {number[]} nums
 * @returns {void}
 */
export const moveZeroes = (nums) => {
  let nonZero = 0;
  const arr = nums;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      if (nonZero !== i) {
        arr[nonZero] = arr[i];
        arr[i] = 0;
      }
      nonZero += 1;
    }
  }
};
