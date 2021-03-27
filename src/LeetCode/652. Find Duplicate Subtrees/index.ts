/**
 * DIFFICULTY: Medium
 *
 * Given the root of a binary tree, return all duplicate subtrees.
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them.
 * Two trees are duplicate if they have the same structure with the same node values.
 */

export class TreeNode {
  constructor(
    public val = 0,
    public left: TreeNodeOrNull = null,
    public right: TreeNodeOrNull = null
  ) {}
}

export type TreeNodeOrNull = TreeNode | null

/**
 * Create a map containing all subtrees. While populating, if a subtree already exists, add it to the set of duplicates.
 * Then return a tree for each duplicate
 */
export function findDuplicateSubtrees(root: TreeNodeOrNull): TreeNodeOrNull[] {
  if (!root) return []
  const subTrees = new Map<string, TreeNode>() // contains subtrees represented as a string
  const duplicates = new Set<string>()

  function dfs(root: TreeNodeOrNull): string {
    if (!root) return ''
    const treeId = `${root.val} L{${dfs(root.left)}} R{${dfs(root.right)}}`
    if (subTrees.has(treeId)) duplicates.add(treeId)
    subTrees.set(treeId, root)
    return treeId
  }

  dfs(root)

  return [...duplicates.values()].map((treeId) => subTrees.get(treeId) as TreeNode)
}
