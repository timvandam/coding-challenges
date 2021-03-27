import { deleteDuplicates, ListNode, ListNodeOrNull } from './index'

function createLinkedList(...args: number[]): ListNodeOrNull {
  if (!args.length) return null
  return new ListNode(args[0], createLinkedList(...args.slice(1)))
}

it('one', () => {
  expect(deleteDuplicates(createLinkedList(1, 1, 2))).toEqual(createLinkedList(2))
})
