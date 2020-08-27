import { pascal } from './index'

it.each([
	[0, [1]],
	[1, [1, 1]],
	[2, [1, 2, 1]],
	[3, [1, 3, 3, 1]],
	[4, [1, 4, 6, 4, 1]],
	[5, [1, 5, 10, 10, 5, 1]]
])('returns row %i', (i, row) => {
	expect(pascal(i)).toEqual(row)
})

it('returns something with 999', () => {
	expect(pascal(999)).toBeDefined()
})
