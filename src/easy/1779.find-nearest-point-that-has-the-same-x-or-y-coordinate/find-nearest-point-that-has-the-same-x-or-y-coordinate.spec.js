import { nearestValidPoint } from './find-nearest-point-that-has-the-same-x-or-y-coordinate';

describe('1779.find-nearest-point-that-has-the-same-x-or-y-coordinate', () => {
  it.each`
    x    | y    | points                                      | expected
    ${3} | ${4} | ${[[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]]} | ${2}
    ${3} | ${4} | ${[[3, 4]]}                                 | ${0}
    ${3} | ${4} | ${[[2, 3]]}                                 | ${-1}
  `(
    'should find the nearest point from [$x, $y] at index $index in $points',
    ({ x, y, points, expected }) => {
      expect.hasAssertions();
      expect(nearestValidPoint(x, y, points)).toBe(expected);
    }
  );
});
