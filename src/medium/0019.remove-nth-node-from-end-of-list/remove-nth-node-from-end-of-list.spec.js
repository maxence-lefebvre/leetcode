import { fromListNode, toListNode } from '../../shared/list-node';
import { removeNthFromEnd } from './remove-nth-node-from-end-of-list';

describe('0019.remove-nth-node-from-end-of-list', () => {
  it.each`
    input              | n    | expected
    ${[1, 2, 3, 4, 5]} | ${2} | ${[1, 2, 3, 5]}
    ${[1]}             | ${1} | ${[]}
    ${[1, 2]}          | ${1} | ${[1]}
    ${[1, 2]}          | ${2} | ${[2]}
  `('should return $expected with input $input', ({ input, n, expected }) => {
    expect.hasAssertions();
    expect(fromListNode(removeNthFromEnd(toListNode(input), n))).toStrictEqual(
      expected
    );
  });
});
