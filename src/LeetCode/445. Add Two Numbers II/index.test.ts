import { addTwoNumbers, ListNode, ListNodeOrNull } from './index'

function createLinkedList (...args: number[]): ListNodeOrNull {
	if (!args.length) return null
	return new ListNode(args[0], createLinkedList(...args.slice(1)))
}

it('one', () => {
	expect(addTwoNumbers(
		createLinkedList(7, 2, 4, 3),
		createLinkedList(5, 6, 4)
	)).toEqual(
		createLinkedList(7, 8, 0, 7)
	)
})

it('two', () => {
	expect(addTwoNumbers(
		createLinkedList(5),
		createLinkedList(5)
	)).toEqual(
		createLinkedList(1, 0)
	)
})
