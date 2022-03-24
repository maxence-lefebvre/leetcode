import { merge } from './merge-sorted-array';

describe('0088.merge-sorted-array', () => {
  it.each`
    nums1                 | m    | nums2        | n    | expected
    ${[1, 2, 3, 0, 0, 0]} | ${3} | ${[2, 5, 6]} | ${3} | ${[1, 2, 2, 3, 5, 6]}
    ${[1]}                | ${1} | ${[]}        | ${0} | ${[1]}
    ${[0]}                | ${0} | ${[1]}       | ${1} | ${[1]}
  `(
    'should mutate nums1 to $expected, with nums1 $nums1, m $m, nums2 $nums2, n $n',
    ({ nums1, m, nums2, n, expected }) => {
      expect.hasAssertions();

      merge(nums1, m, nums2, n);

      expect(nums1).toStrictEqual(expected);
    }
  );
});
