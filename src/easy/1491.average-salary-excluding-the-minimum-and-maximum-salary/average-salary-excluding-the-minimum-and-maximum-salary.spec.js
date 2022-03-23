import { average } from './average-salary-excluding-the-minimum-and-maximum-salary';

describe('1491.average-salary-excluding-the-minimum-and-maximum-salary', () => {
  it.each`
    salaries                    | expected
    ${[4000, 3000, 1000, 2000]} | ${2500}
    ${[1000, 2000, 3000]}       | ${2000}
  `(
    'should return $expected with salaries $salaries',
    ({ salaries, expected }) => {
      expect.hasAssertions();
      expect(average(salaries)).toBe(expected);
    }
  );
});
