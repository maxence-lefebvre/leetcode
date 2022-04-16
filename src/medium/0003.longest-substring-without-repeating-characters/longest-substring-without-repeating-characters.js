/**
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/}
 * @param {string} s
 * @returns {number}
 */
export const lengthOfLongestSubstring = (s) => {
  const chars = {};
  let max = 0;
  let a = 0;
  let b = 0;

  while (b < s.length) {
    const c = s[b];
    if (!chars[c]) {
      chars[c] = true;
      b += 1;
      max = Math.max(max, b - a);
    } else {
      chars[s[a]] = false;
      a += 1;
    }
  }

  return max;
};

/*
 * a = b
 * v
 * d v d f         {}
 *
 * a b
 * v v
 * d v d f         { d = true }
 *
 * a   b
 * v   v
 * d v d f         { d = true, v = true }
 *
 *   a b
 *   v v
 * d v d f         { v = true }
 *   a   b
 *   v   v
 * d v d f         { v = true, d = true }
 *   a   b
 *   v   v
 * d v d f         { v = true, d = true, f = true }
 */

/*
 * a = b
 * v
 * p w w k e w        {}
 * a b
 * v v
 * p w w k e w        { p = true }
 * a   b
 * v   v
 * p w w k e w        { p = true, w = true }
 *   a b
 *   v v
 * p w w k e w        { w = true }
 *     a = b
 *     v
 * p w w k e w        { }
 *     a b
 *     v v
 * p w w k e w        { w = true }
 *     a   b
 *     v   v
 * p w w k e w        { w = true, k = true }
 *     a     b
 *     v     v
 * p w w k e w        { w = true, k = true, e = true }
 *       a   b
 *       v   v
 * p w w k e w        { k = true, e = true }
 *       a     b
 *       v     v
 * p w w k e w        { k = true, e = true, w = true }
 */
