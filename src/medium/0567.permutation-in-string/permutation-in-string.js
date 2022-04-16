const a = 'a'.charCodeAt(0);

const charCode = (s, i) => s.charCodeAt(i) - a;

/**
 * @see {@link https://leetcode.com/problems/permutation-in-string/}
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }

  const chars1 = new Array(26).fill(0);
  const chars2 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i += 1) {
    chars1[charCode(s1, i)] += 1;
    chars2[charCode(s2, i)] += 1;
  }

  let count = 0;
  for (let i = 0; i < 26; i += 1) {
    count += +(chars1[i] === chars2[i]);
  }

  const l = s1.length;

  for (let i = l; i < s2.length; i += 1) {
    if (count === 26) {
      return true;
    }
    const right = charCode(s2, i);
    const left = charCode(s2, i - l);

    chars2[right] += 1;

    if (chars1[right] === chars2[right]) {
      count += 1;
    } else if (chars1[right] + 1 === chars2[right]) {
      count -= 1;
    }

    chars2[left] -= 1;

    if (chars1[left] === chars2[left]) {
      count += 1;
    } else if (chars1[left] - 1 === chars2[left]) {
      count -= 1;
    }
  }

  return count === 26;
};
