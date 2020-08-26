import { mctFromLeafValues } from './index'

it('example 1', () => {
	expect(mctFromLeafValues([6, 2, 4])).toBe(32)
})

it('example 2', () => {
	expect(mctFromLeafValues([6, 9, 4])).toBe(78)
})
