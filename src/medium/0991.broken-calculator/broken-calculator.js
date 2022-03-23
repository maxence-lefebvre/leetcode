/**
 * @see {@link https://leetcode.com/problems/broken-calculator/}
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const brokenCalc = (from, to) => {
  let count = 0;
  let end = to;

  while (end > from) {
    count += 1;

    if (end % 2 === 1) {
      end += 1;
    } else {
      end /= 2;
    }
  }

  return count + (from - end);
};
