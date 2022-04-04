export function ListNode(val = 0) {
  this.val = val;
  this.next = null;
}

export const toListNode = ([head, ...tail]) => {
  const headNode = new ListNode(head);

  tail.reduce((prevNode, val) => {
    const node = new ListNode(val);

    // eslint-disable-next-line no-param-reassign
    prevNode.next = node;

    return node;
  }, headNode);

  return headNode;
};

export const fromListNode = (head) => {
  const array = [];
  let node = head;

  while (node) {
    array.push(node.val);
    node = node.next;
  }

  return array;
};
