import { rotate } from './rotate-array';

describe('0189.rotate-array', () => {
  it.each`
    input                    | k    | expected
    ${[1, 2, 3, 4, 5, 6, 7]} | ${3} | ${[5, 6, 7, 1, 2, 3, 4]}
    ${[-1, -100, 3, 99]}     | ${2} | ${[3, 99, -1, -100]}
  `(
    'should mutates $input to $expected after $k rotations',
    ({ input, k, expected }) => {
      expect.hasAssertions();
      rotate(input, k);
      expect(input).toStrictEqual(expected);
    }
  );
});
