/**
 * @see {@link https://leetcode.com/problems/remove-nth-node-from-end-of-list/}
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode|null}
 */

export const removeNthFromEnd = (head, k) => {
  // (n-k-1)th node, the node preceding the one we need to delete.
  let a;
  // (n-k)th node, the node we need to delete.
  let b = head;
  // fast runner
  let p = head;

  for (let i = 0; i < k; i += 1) {
    p = p.next;
  }

  // start with a delay of k so that pos(b) = pos(p) - k = n - k (where n is length of list)
  // and pos(a) = pos(b) - 1 = n - k - 1
  while (p) {
    p = p.next;
    [a, b] = [b, b.next];
  }

  // a is undefined if we don't even have head in the array (meaning we are deleting the first node).
  // so return the second node.
  if (!a) {
    return b.next;
  }

  a.next = b.next;

  return head;
};
