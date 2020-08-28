/**
 * DIFFICULTY: Medium
 *
 * A full binary tree is a binary tree where each node has exactly 0 or 2 children.
 * Return a list of all possible full binary trees with N nodes.  Each element of the answer is the root node of one possible tree.
 * Each node of each tree in the answer must have node.val = 0.
 * You may return the final list of trees in any order.
 */

export class TreeNode {
	constructor(public val = 0, public left: TreeNodeOrNull = null, public right: TreeNodeOrNull = null) {}
}

export type TreeNodeOrNull = TreeNode | null

export function allPossibleFBT(n: number): TreeNode[] {
	const dp: TreeNode[][] = [[], [new TreeNode(0)]]

	for (let i = 3; i <= n; i += 2) {
		dp[i] = []
		for (let j = 1; j < i; j += 2) {
			const leftCombos = dp[j]
			const rightCombos = dp[i - j - 1]
			for (const left of leftCombos) {
				for (const right of rightCombos) {
					dp[i].push(new TreeNode(0, left, right))
				}
			}
		}
	}

	return dp[dp.length - 1]
}
