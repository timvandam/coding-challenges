import { singleNonDuplicate } from './index'

it('example 1', () => {
	expect(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])).toBe(2)
})

it('example 2', () => {
	expect(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])).toBe(10)
})
