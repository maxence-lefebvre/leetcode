import { rob as originalRob } from '../0198.house-robber/house-robber';

/**
 * @see {@link https://leetcode.com/problems/house-robber-ii/}
 * @param {number[]} houses
 * @returns number;
 */
export const rob = (houses) => {
  if (houses.length <= 2) {
    return Math.max(...houses);
  }

  return Math.max(
    originalRob(houses.slice(0, -1)),
    originalRob(houses.slice(1))
  );
};
