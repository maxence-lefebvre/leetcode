import { intersect } from './intersection-of-two-arrays-ii';

describe('0350.intersection-of-two-arrays-ii', () => {
  it.each`
    nums1           | nums2              | expected
    ${[1, 2, 2, 1]} | ${[2, 2]}          | ${[2, 2]}
    ${[4, 9, 5]}    | ${[9, 4, 9, 8, 4]} | ${[4, 9]}
  `(
    'should return $expected when intersecting $nums1 and $nums2',
    ({ nums1, nums2, expected }) => {
      expect.hasAssertions();
      const sort = (a, b) => a - b;
      const intersection = intersect(nums1, nums2).sort(sort);
      expect(intersection).toStrictEqual(expected);
    }
  );
});
