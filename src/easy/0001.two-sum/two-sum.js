/* target = 13
 * ---
 *   i = 0
 *   v
 * [ 2, 7, 11, 15 ]; termsIndex = {} -> j = map[13 - 2] = map[11] = undefined
 *      i = 1
 *      v
 * [ 2, 7, 11, 15 ]; termsIndex = { 2: 0 } -> j = map[13 - 7] = map[6] = undefined
 *         i = 2
 *         v
 * [ 2, 7, 11, 15 ]; termsIndex = { 2: 0, 7: 1 } -> j = map[13 - 11] = map[2] = 0
 * => [0, 2]
 */

/**
 * @see {@link https://leetcode.com/problems/two-sum/}
 * @param   {number[]} terms
 * @param   {number}   targetSum
 * @returns {number[]}
 */
export const twoSum = (terms, targetSum) => {
  const termsIndex = {};

  for (let i = 0; i < terms.length; i += 1) {
    const j = termsIndex[targetSum - terms[i]];
    if (j !== undefined) {
      return [j, i];
    }
    termsIndex[terms[i]] = i;
  }

  return [];
};
