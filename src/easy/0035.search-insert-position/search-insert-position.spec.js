import { searchInsert } from './search-insert-position';

describe('0035.search-insert-position', () => {
  it.each`
    nums            | target | expected
    ${[1, 3, 5, 6]} | ${5}   | ${2}
    ${[1, 3, 5, 6]} | ${2}   | ${1}
    ${[1, 3, 5, 6]} | ${7}   | ${4}
  `(
    'should return $expected when trying to insert $target in $nums',
    ({ nums, target, expected }) => {
      expect.hasAssertions();
      expect(searchInsert(nums, target)).toBe(expected);
    }
  );
});
