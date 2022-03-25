/**
 * @see {@link https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/}
 * @param {number} x
 * @param {number} y
 * @param {[number, number][]} points
 * @returns {number}
 */
export const nearestValidPoint = (x, y, points) => {
  let shortest = -1;
  let shortestDistance = Infinity;

  for (let i = 0; i < points.length; i += 1) {
    const [a, b] = points[i];
    // is valid
    if (x === a || y === b) {
      // manhattan distance
      const distance = Math.abs(x - a) + Math.abs(y - b);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        shortest = i;
      }
    }
  }

  return shortest;
};
