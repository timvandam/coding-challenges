/**
 * DIFFICULTY: Medium
 *
 * Given two binary search trees root1 and root2.
 * Return a list containing all the integers from both trees sorted in ascending order.
 */

export class TreeNode {
	constructor(public val = 0, public left: TreeNodeOrNull = null, public right: TreeNodeOrNull = null) {}
}

export type TreeNodeOrNull = TreeNode | null

// Visit left, visit root, visit right
function* inorder(root: TreeNodeOrNull): Generator<number, void, void> {
	if (!root) return
	if (root.left) yield* inorder(root.left)
	yield root.val
	if (root.right) yield* inorder(root.right)
}

/**
 * This is really simple. To get a sorted array from a BST we simply do an inorder traversal. We do this on both trees
 * and then merge the two.
 *
 * The solution below merges two inorder iterators and returns the result. O(n) time complexity. O(n + m) space complexity
 */
export function getAllElements(root1: TreeNodeOrNull, root2: TreeNodeOrNull): number[] {
	return [...mergeIterators(inorder(root1), inorder(root2))]
}

function* mergeIterators(it1: Iterator<number>, it2: Iterator<number>): Generator<number, void, void> {
	let num1 = it1.next()
	let num2 = it2.next()
	while (!(num1.done && num2.done)) {
		if (num1.done || (!num2.done && num1.value > num2.value)) {
			yield num2.value
			num2 = it2.next()
		} else {
			yield num1.value
			num1 = it1.next()
		}
	}
}

/**
 * This solution collects the two sorted arrays from both trees and merges them. This uses more memory as two iterators
 * are collected, but is consistently a bit faster on LeetCode.
 * O(n) time complexity. O(n + m) space complexity
 */
export function _getAllElements(root1: TreeNodeOrNull, root2: TreeNodeOrNull): number[] {
	const values1 = [...inorder(root1)]
	const values2 = [...inorder(root2)]
	return merge(values1, values2)
}

function merge(array1: number[], array2: number[]): number[] {
	const length = array1.length + array2.length
	const result: number[] = Array(length)
	let i1 = 0
	let i2 = 0
	for (let i = 0; i < length; i++) {
		const num1 = array1[i1]
		const num2 = array2[i2]
		if (num1 === undefined || num1 > num2) result[i] = array2[i2++]
		else result[i] = array1[i1++]
	}
	return result
}
