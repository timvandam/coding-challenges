import { subarraySum } from './index'

it('example 1', () => {
  expect(subarraySum([1, 1, 1], 2)).toBe(2)
})

it('example 2', () => {
  expect(subarraySum([1], 0)).toBe(0)
})

it('example 3', () => {
  expect(subarraySum([-1, -1, 1], 0)).toBe(1)
})

it('example 4', () => {
  expect(subarraySum([1, 2, 3], 3)).toBe(2)
})
