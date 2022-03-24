/**
 * Two pointers
 * target = 9
 * ---
 *  start              end
 *  v                  v
 * [2,    7,    11,    15] -> 2 + 15 = 17 > 9
 *  start       end
 *  v           v
 * [2,    7,    11,    15] -> 2 + 11 = 13 > 9
 *  start end
 *  v     v
 * [2,    7,    11,    15] -> 2 +  7 = 9
 */

/**
 * target = 18
 * ---
 *  start              end
 *  v                  v
 * [2,    7,    11,    15] -> 2 + 15 = 17 < 18
 *        start        end
 *        v            v
 * [2,    7,    11,    15] -> 7 + 15 = 22 > 18
 *        start end
 *        v     v
 * [2,    7,    11,    15] -> 7 + 11 = 18
 */

/**
 * target = 26
 * ---
 *  start              end
 *  v                  v
 * [2,    7,    11,    15] ->  2 + 15 = 17 < 26
 *        start        end
 *        v            v
 * [2,    7,    11,    15] ->  7 + 15 = 22 < 26
 *              start  end
 *              v      v
 * [2,    7,    11,    15] -> 11 + 15 = 26
 */

/**
 * @see {@link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/}
 * @param {number[]} terms
 * @param {number} targetSum
 * @returns {number[]}
 */
export const twoSum = (terms, targetSum) => {
  let start = 0;
  let end = terms.length - 1;

  while (start < end) {
    if (terms[start] + terms[end] === targetSum) {
      return [start + 1, end + 1];
    }
    if (terms[start] + terms[end] > targetSum) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return [];
};
