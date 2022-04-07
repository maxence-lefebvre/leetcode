/**
 * @see {@link https://leetcode.com/problems/last-stone-weight/}
 * @tags heap
 * @param {number[]} stones
 * @returns {number}
 */
export const lastStoneWeight = (stones) => {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    stones.push(stones.pop() - stones.pop());
  }
  return stones[0];
};
