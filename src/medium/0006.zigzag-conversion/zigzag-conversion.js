/*
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 * length   = l = 14
 * rowCount = n = 4
 * cycle    = c = 6 = 2 * (4 - 1)
 *
 * 0 |     | 6 |     | 12
 * 1 |   5 | 7 |  11 | 13 = l - 1
 * 2 | 4   | 8 | 10  |
 * 3 |     | 9 |     |
 *
 * 0     |          | 0 + c     |           | 0 + 2c
 * 1     |   -1 + c | 1 + c     |     -1+2c | 1 + 2c = l - 1
 * 2     | -2 + c   | 2 + c     | -2+2c     | [2 + 2c]
 * (n-1) |          | (n-1) + c |           | [(n-1) + 2c]
 *
 *         j=0                 j=c                 j=2c
 * i=0   | i + j |           | i + j |           | i + j
 * i=1   | i + j |    -i+j+c | i + j |    -i+j+c | i + j = l - 1
 * i=2   | i + j | -i+j+c    | i + j | -i+j+c    |
 * i=n-1 | i + j |           | i + j |           |
 */

/**
 * @see {@link https://leetcode.com/problems/zigzag-conversion/}
 * @param {string} s - String to zigzag
 * @param {number} n - Row count.
 * @returns {string|*}
 */
export const convert = (s, n) => {
  if (n < 2) {
    return s;
  }

  let result = '';
  const l = s.length;
  const c = 2 * (n - 1);

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j + i < l; j += c) {
      result += s[i + j];

      if (i !== 0 && i !== n - 1) {
        result += s[-i + j + c] || '';
      }
    }
  }

  return result;
};
