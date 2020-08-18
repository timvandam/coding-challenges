import { addTwoNumbers, ListNode, ListNodeOrNull } from './index'

function createLinkedList (...args: number[]): ListNodeOrNull {
	if (!args.length) return null
	return new ListNode(args[0], createLinkedList(...args.slice(1)))
}

it('one', () => {
	expect(addTwoNumbers(
		createLinkedList(2, 4, 3),
		createLinkedList(5, 6, 4))).toEqual(
		createLinkedList(7, 0, 8))
})

it('two', () => {
	expect(addTwoNumbers(
		createLinkedList(5),
		createLinkedList(5))).toEqual(
		createLinkedList(0, 1))
})

it('three', () => {
	expect(addTwoNumbers(
		createLinkedList(1, 8),
		createLinkedList(0))).toEqual(
		createLinkedList(1, 8))
})
