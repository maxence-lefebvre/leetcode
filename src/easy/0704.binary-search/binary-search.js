/*
 * target = 9
 * ---
 *  start                                    end
 *  v                                        v
 * [-1,      0,      3,      5,      9,      12]
 *
 *  start            pivot                   end
 *  v                v                       v
 * [-1,      0,      3,      5,      9,      12]
 *
 *                           start           end
 *                           v               v
 * [-1,      0,      3,      5,      9,      12]
 *
 *                           start   pivot   end
 *                           v       v       v
 * [-1,      0,      3,      5,      9,      12]
 */

/*
 * target = 0
 * ---
 *  start                                    end
 *  v                                        v
 * [-1,      0,      3,      5,      9,      12]
 *
 *  start            pivot                   end
 *  v                v                       v
 * [-1,      0,      3,      5,      9,      12]
 *
 *  start    end
 *  v        v
 * [-1,      0,      3,      5,      9,      12]
 *
 *  start    end
 *  pivot    |
 *  v        v
 * [-1,      0,      3,      5,      9,      12]
 *
 *           start = end
 *           v
 * [-1,      0,      3,      5,      9,      12]
 *
 *           start = end = pivot
 *           v
 * [-1,      0,      3,      5,      9,      12]
 */

/**
 * @see {@link https://leetcode.com/problems/binary-search/}
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
export const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const pivot = start + Math.floor((end - start) / 2);
    if (nums[pivot] === target) {
      return pivot;
    }
    if (nums[pivot] > target) {
      // look left side
      end = pivot - 1;
    } else {
      // look right side
      start = pivot + 1;
    }
  }

  return -1;
};
