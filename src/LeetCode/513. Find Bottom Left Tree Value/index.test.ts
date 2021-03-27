import { findBottomLeftValue, TreeNode } from './index'

it('works', () => {
  const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4)),
    new TreeNode(3, new TreeNode(5, new TreeNode(7)), new TreeNode(6))
  )
  expect(findBottomLeftValue(tree)).toEqual(7)
})
