/**
 * DIFFICULTY: Medium
 *
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
 * Return the linked list sorted as well.
 */

export type ListNodeOrNull = ListNode | null

export class ListNode {
  constructor(public val = 0, public next: ListNodeOrNull = null) {}
}

export function deleteDuplicates(head: ListNodeOrNull): ListNodeOrNull {
  if (head === null) return null

  const sentinel = new ListNode(0, head)
  let preTail = sentinel // one before the tail. makes it easy to remove the tail if we have to

  /**
   * Strategy:
   * We pick the first value which is potentially a duplicate, and add it the the result list.
   * We check whether it's duplicate using checkNodes. If it's a duplicate, we can easily remove it again using preTail.
   * If it's not a duplicate, we make the checkNode (which is guaranteed to be a different number) the new potentialDuplicate.
   */
  let potentialDuplicate: ListNodeOrNull = head
  let checkNode: ListNodeOrNull = head.next
  for (; checkNode; checkNode = checkNode.next) {
    if (potentialDuplicate.val === checkNode.val) {
      // Found a duplicate. Remove it
      preTail.next = null
      continue
    }

    // CheckNode is not the same as potentialDuplicate, make the checkNode the new potentialDuplicate
    potentialDuplicate = checkNode

    // We add the potentialDuplicate to the result using the preTail, as the preTail makes it easy to remove it again in
    // case it is actually duplicate
    if (preTail.next) preTail = preTail.next
    preTail.next = potentialDuplicate
  }

  return sentinel.next
}
