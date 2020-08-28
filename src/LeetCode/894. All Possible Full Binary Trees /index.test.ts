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

const trees = (...cases: (number | null)[][]) => cases.map((tree) => createTree(tree))

it('example 1', () => {
	expect(allPossibleFBT(7)).toEqual(
		expect.arrayContaining(
			trees(
				[0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0],
				[0, 0, 0, null, null, 0, 0, null, null, null, null, 0, 0],
				[0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, null, null, null, null, 0, 0],
				[0, 0, 0, 0, 0, null, null, 0, 0]
			)
		)
	)
})

it('example 2', () => {
	expect(allPossibleFBT(3)).toEqual(trees([0, 0, 0]))
})

it('example 3', () => {
	expect(allPossibleFBT(5)).toEqual(
		expect.arrayContaining(trees([0, 0, 0, 0, 0, null, null], [0, 0, 0, null, null, 0, 0]))
	)
})
