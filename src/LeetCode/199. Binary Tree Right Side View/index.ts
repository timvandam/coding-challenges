/**
 * DIFFICULTY: Medium
 *
 * Given a binary tree, imagine yourself standing on the right side of it,
 * return the values of the nodes you can see ordered from top to bottom.
 */

export class TreeNode {
	constructor(public val = 0, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}

/**
 * Strategy:
 * This one is quite easy. This can easily be done by doing a breadth-first traversal and saving the last element of
 * every row.
 */
export function rightSideView(root: TreeNode | null): number[] {
	let queue: TreeNode[] = []
	const result: number[] = []
	if (root) queue.push(root)
	let nextRow: TreeNode[] = []
	while (queue.length) {
		const { left, right, val } = queue.shift() as TreeNode
		if (left) nextRow.push(left)
		if (right) nextRow.push(right)

		if (!queue.length) {
			// We're at the last element of a row
			result.push(val)
			queue = nextRow
			nextRow = []
		}
	}
	return result
}
