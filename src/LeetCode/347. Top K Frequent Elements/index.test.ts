import { topKFrequent } from './index'

it('example 1', () => {
  expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
})

it('example 2', () => {
  expect(topKFrequent([1], 1)).toEqual([1])
})

it('example 3', () => {
  expect(topKFrequent([5, 3, 1, 1, 1, 3, 5, 73, 1], 3)).toEqual(expect.arrayContaining([1, 3, 5]))
})
