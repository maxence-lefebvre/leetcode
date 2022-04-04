/**
 * @see {@link https://leetcode.com/problems/middle-of-the-linked-list/}
 * @param {ListNode} head
 * @returns {ListNode}
 */

export const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    // Go 2 times as fast so that pos(fast) = 2 * pos(slow)
    // This way, when pos(fast) = n, pos(slow) = n / 2, where n is length of list.
    fast = fast.next.next;
  }

  return slow;
};
