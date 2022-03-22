import { search } from './binary-search';

describe('0704.binary-search', () => {
  it.each`
    nums                    | target | expected
    ${[-1, 0, 3, 5, 9, 12]} | ${9}   | ${4}
    ${[-1, 0, 3, 5, 9, 12]} | ${2}   | ${-1}
    ${[-1, 0, 3, 5, 9, 12]} | ${0}   | ${1}
  `(
    'should return $expected when searching for $target',
    ({ nums, target, expected }) => {
      expect.hasAssertions();
      expect(search(nums, target)).toBe(expected);
    }
  );
});
