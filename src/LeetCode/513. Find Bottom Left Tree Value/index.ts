/**
 * DIFFICULTY: Medium
 *
 * Given a binary tree, find the leftmost value in the last row of the tree.
 */

export type TreeNodeOrNull = TreeNode | null

export class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNodeOrNull = null,
    public right: TreeNodeOrNull = null
  ) {}
}

export function findBottomLeftValue(root: TreeNode): number {
  /**
   * Strategy: We can use BFS to iterate row-by-row. We can not find the first value of each row with this unless we
   * make some modifications. We can do this by saving the first value of each row, then iterating over the whole row,
   * and checking if it was the last row. If so return that first value.
   */

  let q = [root] // = queue

  while (q.length) {
    const { val: first } = q[0]

    const nextRow: TreeNode[] = []

    while (q.length) {
      const { left, right } = q.shift() as TreeNode
      if (left) nextRow.push(left)
      if (right) nextRow.push(right)
    }

    if (!nextRow.length) return first
    q = nextRow
  }

  return -1 // this should never happen
}
