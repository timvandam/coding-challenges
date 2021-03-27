import { findDuplicateSubtrees, TreeNode, TreeNodeOrNull } from './index'

type Example = [number, (number | null)[], SubtreeCases[]]
type SubtreeCases = [string, TreeNodeOrNull]

const getLeftChild = (i: number) => i * 2 + 1
const getRightChild = (i: number) => i * 2 + 2

const createTree = (array: (number | null)[], i = 0): TreeNodeOrNull => {
  if (i >= array.length) return null
  const value = array[i]
  return value !== null
    ? new TreeNode(value, createTree(array, getLeftChild(i)), createTree(array, getRightChild(i)))
    : null
}

describe.each<Example>([
  [
    1,
    [1, 2, 3, 4, null, 2, 4, null, null, null, null, 4],
    [
      ['4 L{} R{}', createTree([4])],
      ['2 L{4 L{} R{}} R{}', createTree([2, 4])],
    ],
  ],
  [2, [2, 1, 1], [['1 L{} R{}', createTree([1])]]],
  [3, [2, 2, 2, 3, null, 3], [['2 L{3 L{} R{}}', createTree([2, 3])]]],
])('example %i', (index, example, cases) => {
  it.each(cases)('contains subtree %s', (name, subtree) => {
    expect(findDuplicateSubtrees(createTree(example))).toContainEqual(subtree)
  })
})
