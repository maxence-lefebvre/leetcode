/**
 *  i = 0        j = 0
 *  v            v
 * [1,2,3]    - [2,5,6] -> 1 < 2
 *    i = 1      j = 0
 *    v          v
 * [1,2,3]    - [2,5,6] -> 2 >= 2
 *    i = 1        j = 1
 *    v            v
 * [1,2,2,3]  - [2,5,6] -> 2 < 5
 * ...
 *        i = 3    j = 1
 *        v        v
 * [1,2,2,3]  - [2,5,6] -> 3 < 5
 *          i = 4  j = 1
 *          v      v
 * [1,2,2,3]  - [2,5,6] -> undefined
 *          i = 4      j = 2
 *          v          v
 * [1,2,2,3,5]  - [2,5,6] -> 5 < 6
 *            i = 5    j = 2
 *            v        v
 * [1,2,2,3,5]  - [2,5,6] -> undefined
 *            i = 5        j = 3
 *            v            v
 * [1,2,2,3,5,6]  - [2,5,6] -> j >= n, done
 *
 */

/**
 * @see {@link https://leetcode.com/problems/merge-sorted-array/}
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @returns {void}
 */
export const merge = (nums1, m, nums2, n) => {
  let i = 0;
  let j = 0;

  // Disabling this ESLint rule since exercise asks us to mutate nums1.
  // eslint-disable-next-line no-param-reassign
  nums1.length = m;

  while (j < n) {
    if (nums1[i] === undefined || nums1[i] >= nums2[j]) {
      nums1.splice(i || 0, 0, nums2[j]);
      j += 1;
    } else {
      i += 1;
    }
  }
};
