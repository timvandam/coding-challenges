/**
 * DIFFICULTY: Medium
 *
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
 * Return the smallest level X such that the sum of all the values of nodes at level X is maximal.
 */

export class TreeNode {
	constructor(public val = 0, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

export type TreeNodeOrNull = TreeNode | null

// We check every node, so O(n)
export function maxLevelSum(root: TreeNodeOrNull): number {
	if (!root) return 0

	// BFS per row
	let q = [root]
	let nextRow: TreeNode[] = []
	let level = 1
	let maxLevel = 1
	let maxSum = 0
	let sum = 0
	while (q.length) {
		const { left, right, val } = q.pop() as TreeNode
		if (left) nextRow.push(left)
		if (right) nextRow.push(right)
		sum += val

		if (!q.length) {
			q = nextRow
			nextRow = []
			if (sum > maxSum) {
				maxLevel = level
				maxSum = sum
			}
			sum = 0
			level++
		}
	}

	return maxLevel
}
