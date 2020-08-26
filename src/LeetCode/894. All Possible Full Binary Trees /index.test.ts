import { allPossibleFBT, TreeNode, TreeNodeOrNull } from './index'

const getLeftChild = (i: number) => i * 2 + 1
const getRightChild = (i: number) => i * 2 + 2

const createTree = (array: (number | null)[], i = 0): TreeNodeOrNull => {
	if (i >= array.length) return null
	const value = array[i]
	return value !== null
		? new TreeNode(value, createTree(array, getLeftChild(i)), createTree(array, getRightChild(i)))
		: null
}

const eachTrees = (...cases: (number | null)[][]) => cases.map((tree) => createTree(tree))

describe('example 1', () => {
	const result = allPossibleFBT(7)
	it.each(
		eachTrees(
			[0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0],
			[0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, null, null, null, null, 0, 0],
			[0, 0, 0, 0, 0, null, null, 0, 0]
		)
	)('contains possible tree', (tree) => {
		expect(result).toContainEqual(tree)
	})
})

describe('example 2', () => {
	it('contains possible tree', () => {
		expect(allPossibleFBT(3)).toEqual([[0, 0, 0]].map(createTree))
	})
})

describe('example 3', () => {
	const result = allPossibleFBT(5)
	it.each(eachTrees([0, 0, 0, 0, 0, null, null], [0, 0, 0, null, null, 0, 0]))('contains possible tree', (tree) => {
		expect(result).toContainEqual(tree)
	})
})
