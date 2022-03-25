/**
 * @see {@link https://leetcode.com/problems/delete-and-earn/}
 * @see {@link ./../0198.house-robber/house-robber.js}
 * @param {numbers[]} nums
 * @return {number}
 */
export const deleteAndEarn = (nums) => {
  const houses = [];
  for (let i = 0; i < nums.length; i += 1) {
    const v = nums[i];
    houses[v] = (houses[v] || 0) + v;
  }

  let [a = 0, b = 0] = houses;
  b = Math.max(a, b);

  for (let j = 2; j < houses.length; j += 1) {
    [a, b] = [b, Math.max(/* skip */ b, /* rob */ (houses[j] || 0) + a)];
  }

  return Math.max(a, b);
};
