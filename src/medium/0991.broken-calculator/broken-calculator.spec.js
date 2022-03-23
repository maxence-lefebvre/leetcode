import { brokenCalc } from './broken-calculator';

describe('0991.broken-calculator', () => {
  it.each`
    from | to    | expected
    ${2} | ${3}  | ${2}
    ${5} | ${8}  | ${2}
    ${3} | ${10} | ${3}
  `(
    'should take $expected operations from $from to $to',
    ({ from, to, expected }) => {
      expect.hasAssertions();
      expect(brokenCalc(from, to)).toBe(expected);
    }
  );
});
