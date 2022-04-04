import { fromListNode, toListNode } from '../../shared/list-node';
import { middleNode } from './middle-of-the-linked-list';

describe('0876.middle-of-the-linked-list', () => {
  it.each`
    input                 | expected
    ${[1, 2, 3, 4, 5]}    | ${[3, 4, 5]}
    ${[1, 2, 3, 4, 5, 6]} | ${[4, 5, 6]}
  `('should return $expected with input $input', ({ input, expected }) => {
    expect.hasAssertions();
    expect(fromListNode(middleNode(toListNode(input)))).toStrictEqual(expected);
  });
});
