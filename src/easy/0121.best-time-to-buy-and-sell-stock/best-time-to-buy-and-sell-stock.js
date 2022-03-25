/**
 * @see {@link https://leetcode.com/problems/best-time-to-buy-and-sell-stock/}
 * @param {number[]} prices
 * @returns {number}
 */
export const maxProfit = (prices) => {
  let min = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    min = Math.min(min, prices[i]);
    profit = Math.max(prices[i] - min, profit);
  }

  return profit;
};
