import { maxLevelSum, TreeNode } from './index'

it('example 1', () => {
  const tree = new TreeNode(1, new TreeNode(7, new TreeNode(7), new TreeNode(-8)), new TreeNode(0))
  expect(maxLevelSum(tree)).toBe(2)
})
