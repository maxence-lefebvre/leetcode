/**
 * @see {@link https://leetcode.com/problems/intersection-of-two-arrays-ii/}
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
export const intersect = (nums1, nums2) => {
  // Count only the values of the smaller array.
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }

  const count = {};
  const intersection = [];

  for (let i = 0; i < nums1.length; i += 1) {
    // eslint-disable-next-line no-unused-expressions
    count[nums1[i]] || (count[nums1[i]] = 0);
    count[nums1[i]] += 1;
  }

  for (let j = 0; j < nums2.length; j += 1) {
    if (count[nums2[j]] > 0) {
      intersection.push(nums2[j]);
      count[nums2[j]] -= 1;
    }
  }

  return intersection;
};
