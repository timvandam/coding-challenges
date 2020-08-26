import { _getAllElements, getAllElements, TreeNode } from './index'

describe.each([
	['getAllElements', getAllElements],
	['_getAllElements', _getAllElements]
])('%s works', (n, method) => {
	it('example 1', () => {
		expect(
			method(new TreeNode(2, new TreeNode(1), new TreeNode(4)), new TreeNode(1, new TreeNode(0), new TreeNode(3)))
		).toEqual([0, 1, 1, 2, 3, 4])
	})

	it('example 2', () => {
		expect(
			method(new TreeNode(2, new TreeNode(1), new TreeNode(4)), new TreeNode(2, new TreeNode(1), new TreeNode(4)))
		).toEqual([1, 1, 2, 2, 4, 4])
	})
})
