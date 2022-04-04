/**
 * @see {@link https://leetcode.com/problems/swapping-nodes-in-a-linked-list/}
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode}
 */
export const swapNodes = (head, k) => {
  let /* kth node */ a = head;
  let /* (n-k)th node */ b = head;
  let p = head;

  for (let i = 1; i < k; i += 1) {
    p = p.next;
  }

  a = p;

  /*
   * Start b with a delay of k. pos(b) = pos(p) - k;
   * Finish when pos(p) = n, where n is length of list.
   */
  while (p.next) {
    p = p.next;
    b = b.next;
  }

  /* swap */
  [a.val, b.val] = [b.val, a.val];

  return head;
};
