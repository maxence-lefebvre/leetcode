/*
 *   start                     end
 *   v                         v
 * [ -7,    -3,    2,    3,    11 ] => 49 v 121 => [ 121 ]
 *   start               end
 *   v                   v
 * [ -7,    -3,    2,    3,    11 ] => 49 v 9   => [ 49, 121 ]
 *          start        end
 *          v            v
 * [ -7,    -3,    2,    3,    11 ] => 9 v 9    => [ 9, 49, 121 ]
 *          start  end
 *          v      v
 * [ -7,    -3,    2,    3,    11 ] => 9 v 4    => [ 9, 9, 49, 121 ]
 *                 start = end
 *                 v
 * [ -7,    -3,    2,    3,    11 ] => 4        => [ 4, 9, 9, 49, 121 ]
 */

/**
 * @see {@link https://leetcode.com/problems/squares-of-a-sorted-array/}
 * @param {number[]} nums
 * @returns {number[]}
 */
export const sortedSquares = (nums) => {
  const squares = [];
  let start = 0;
  let end = nums.length - 1;

  for (let i = nums.length - 1; start <= end; i -= 1) {
    const a = nums[start] * nums[start];
    const b = nums[end] * nums[end];

    squares[i] = Math.max(a, b);

    if (a > b) {
      start += 1;
    } else {
      end -= 1;
    }
  }

  return squares;
};
