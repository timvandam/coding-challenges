/**
 * DIFFICULTY: Medium
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

export type ListNodeOrNull = ListNode | null

export class ListNode {
  constructor(public val = 0, public next: ListNodeOrNull = null) {}
}

// Overflow can only be one or zero, as the maximum numbers are 9 + 9 = 18, meaning the overflow is 10, thus 1 of the next digit.
export function addTwoNumbers(
  one: ListNodeOrNull,
  two: ListNodeOrNull,
  overflow: 0 | 1 = 0
): ListNodeOrNull {
  if (!(one ?? two)) return overflow ? new ListNode(overflow) : null
  let sum = (one?.val ?? 0) + (two?.val ?? 0) + overflow
  overflow = sum >= 10 ? 1 : 0
  if (overflow) sum -= 10
  return new ListNode(sum, addTwoNumbers(one?.next ?? null, two?.next ?? null, overflow))
}
