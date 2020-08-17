import { maxRotateFunction } from './index'

it('works', () => {
	expect(maxRotateFunction([])).toEqual(0)
	expect(maxRotateFunction([1000000007])).toEqual(0)
	expect(maxRotateFunction([-2147483648, -2147483648])).toEqual(-2147483648)
	expect(maxRotateFunction([4, 3, 2, 6])).toEqual(26)
})
