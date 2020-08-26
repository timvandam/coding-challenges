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

	function go(n: number): TreeNode[] {
		if (dp[n]) return dp[n]
		dp[n] = []
		// We are going to try every possible distribution of n nodes. (EG: N=5: [1L, 3R], [3L, 1R])
		for (let i = 1; i < n; i += 2) {
			const leftCombos = go(i)
			const rightCombos = go(n - i - 1)
			for (const left of leftCombos) {
				for (const right of rightCombos) {
					dp[n].push(new TreeNode(0, left, right))
				}
			}
		}
		return dp[n]
	}

	return go(n)
}
