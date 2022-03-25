/**
 * @see {@link https://leetcode.com/problems/two-city-scheduling/}
 * @param {[number, number][]} costs
 * @returns {number}
 */
export const twoCitySchedCost = (costs) => {
  // sort DESC by difference between costA & costB
  costs.sort(([xa, ya], [xb, yb]) => Math.abs(yb - xb) - Math.abs(ya - xa));

  const n = costs.length / 2;
  const interviews = { a: 0, b: 0 };
  let total = 0;

  for (let i = 0; i < costs.length; i += 1) {
    const [a, b] = costs[i];
    if (interviews.a === n) {
      total += b;
    } else if (interviews.b === n) {
      total += a;
    } else if (a < b) {
      total += a;
      interviews.a += 1;
    } else {
      // either a > b, or a === b
      // if a === b, diff = 0, and from now on, diff will always be 0
      // (we sorted by |diff| DESC)
      total += b;
      interviews.b += 1;
    }
  }

  return total;
};
