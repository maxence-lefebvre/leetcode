import { swapNodes } from './swapping-nodes-in-a-linked-list';
import { fromListNode, toListNode } from './list-node';

describe('1721.swapping-nodes-in-a-linked-list', () => {
  it.each`
    input              | k    | expected
    ${[1, 2, 3, 4, 5]} | ${2} | ${[1, 4, 3, 2, 5]}
  `(
    'should return $expected with input $input and k $k',
    ({ input, k, expected }) => {
      expect.hasAssertions();

      expect(fromListNode(swapNodes(toListNode(input), k))).toStrictEqual(
        expected
      );
    }
  );
});
