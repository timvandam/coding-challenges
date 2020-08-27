import { pascal } from './index'

it('works with 3', () => {
	expect(pascal(3)).toEqual([1, 3, 3, 1])
})

it('works with 999', () => {
	expect(pascal(999)).toBeDefined()
})
