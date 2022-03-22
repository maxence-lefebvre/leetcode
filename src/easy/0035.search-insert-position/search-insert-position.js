/**
 * @see {@link https://leetcode.com/problems/search-insert-position/}
 * @see {@link ../0704.binary-search/binary-search.js}
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export const searchInsert = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const pivot = start + Math.floor((end - start) / 2);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[pivot] < target) {
      start = pivot + 1;
    } else {
      end = pivot - 1;
    }
  }

  return start;
};
