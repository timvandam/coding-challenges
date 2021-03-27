import { pascal } from './index'

it.each([
  [0, [1]],
  [1, [1, 1]],
  [2, [1, 2, 1]],
  [3, [1, 3, 3, 1]],
  [4, [1, 4, 6, 4, 1]],
  [5, [1, 5, 10, 10, 5, 1]],
  [
    19,
    [
      1,
      19,
      171,
      969,
      3876,
      11628,
      27132,
      50388,
      75582,
      92378,
      92378,
      75582,
      50388,
      27132,
      11628,
      3876,
      969,
      171,
      19,
      1,
    ],
  ],
])('returns row %i', (i, row) => {
  const result = pascal(i)
  expect(result[result.length - 1]).toEqual(row)
})

it('returns something with 999', () => {
  expect(pascal(999)).toBeDefined()
})
