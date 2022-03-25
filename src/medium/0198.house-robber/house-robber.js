/**
 * @see {@link https://leetcode.com/problems/house-robber/}
 * @param {number[]} houses
 * @return {number} - Bounty.
 */
export const rob = (houses) => {
  if (houses.length < 2) {
    return Math.max(...houses);
  }

  let [a, b] = houses;
  b = Math.max(a, b);

  for (let i = 2; i < houses.length; i += 1) {
    // a = f(i - 2), b = f(i - 1)
    [a, b] = [b, Math.max(/* skip */ b, /* rob */ houses[i] + a)];
  }
  return Math.max(a, b);
};
