import { numRescueBoats } from './boats-to-save-people';

describe('0881.boats-to-save-people', () => {
  it.each`
    input           | limit | expected
    ${[1, 2]}       | ${3}  | ${1}
    ${[3, 2, 2, 1]} | ${3}  | ${3}
    ${[3, 2, 2, 1]} | ${4}  | ${2}
    ${[2, 2, 1, 1]} | ${4}  | ${2}
    ${[2, 1, 1]}    | ${4}  | ${2}
    ${[3, 5, 3, 4]} | ${5}  | ${4}
  `(
    'should return $expected with people $input and boat weight limit $limit',
    ({ input, limit, expected }) => {
      expect.hasAssertions();
      expect(numRescueBoats(input, limit)).toBe(expected);
    }
  );
});
