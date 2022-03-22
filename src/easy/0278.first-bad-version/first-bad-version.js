/**
 * @see {@link https://leetcode.com/problems/first-bad-version/}
 * @see {@link ../0704.binary-search/binary-search.js}
 * @param {function(x: number): boolean} isBadVersion
 * @returns {function(x: number): number}
 */
export const solution = (isBadVersion) => (n) => {
  let start = 1;
  let end = n;

  while (start <= end) {
    const pivot = start + Math.floor((end - start) / 2);
    if (isBadVersion(pivot) && !isBadVersion(pivot - 1)) {
      return pivot;
    }
    if (isBadVersion(pivot)) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }

  return -1;
};
