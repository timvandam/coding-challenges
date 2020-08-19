/**
 * DIFFICULTY: Medium
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The most significant digit comes first and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */

export type ListNodeOrNull = ListNode | null

export class ListNode {
	constructor (public val = 0, public next: ListNodeOrNull = null) {}
}

export function addTwoNumbers (one: ListNodeOrNull, two: ListNodeOrNull): ListNodeOrNull {
	let result: ListNodeOrNull = null

	/**
	 * Use stacks to get the last elements of both lists
	 */
	const stackOne: ListNode[] = []
	const stackTwo: ListNode[] = []

	while (one ?? two) {
		if (one) stackOne.push(one)
		if (two) stackTwo.push(two)

		one = one?.next ?? null
		two = two?.next ?? null
	}

	/**
	 * Take the last elements of each list and add them. Handle overflows too
	 */
	let overflow: 0 | 1 = 0
	while (stackOne.length || stackTwo.length || overflow) {
		const a = stackOne.pop()
		const b = stackTwo.pop()

		let sum: number = (a?.val ?? 0) + (b?.val ?? 0) + overflow
		overflow = sum >= 10 ? 1 : 0
		sum -= overflow * 10

		result = new ListNode(sum, result)
	}

	return result
}
