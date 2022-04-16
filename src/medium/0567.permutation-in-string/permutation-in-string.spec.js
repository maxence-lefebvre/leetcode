import { checkInclusion } from './permutation-in-string';

describe('0567.permutation-in-string', () => {
  it.each`
    s1      | s2            | expected
    ${'ab'} | ${'eidbaooo'} | ${true}
    ${'ab'} | ${'eidboaoo'} | ${false}
  `(
    'should return $expected with input $s1 and $s2',
    ({ s1, s2, expected }) => {
      expect.hasAssertions();
      expect(checkInclusion(s1, s2)).toBe(expected);
    }
  );
});
