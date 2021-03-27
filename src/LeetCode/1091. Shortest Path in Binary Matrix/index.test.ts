import { shortestPathBinaryMatrix } from './index'

it('example 1', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 1],
      [1, 0],
    ])
  ).toBe(2)
})

it('example 2', () => {
  expect(
    shortestPathBinaryMatrix([
      [0, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ])
  ).toBe(4)
})

it('example 3', () => {
  expect(
    shortestPathBinaryMatrix([
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ])
  ).toBe(-1)
})
