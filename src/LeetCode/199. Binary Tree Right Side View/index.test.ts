import { rightSideView, TreeNode } from './index'

it('example', () => {
	expect(
		rightSideView(new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3, null, new TreeNode(4))))
	).toEqual([1, 3, 4])
})
