import { parseMolecule } from './'

test('simple test', () => {
  expect(parseMolecule('MgAu10')).toEqual({ Mg: 1, Au: 10 })
})

test('ethane', () => {
  expect(parseMolecule('C2H6')).toEqual({ C: 2, H: 6 })
})

test('throws on invalid', () => {
  expect(() => parseMolecule('ABC123')).toThrow
})

test('ethane with braces', () => {
  expect(parseMolecule('(C2H6)')).toEqual({ C: 2, H: 6 })
})

test('double ethane with braces', () => {
  expect(parseMolecule('(C2H6)2')).toEqual({ C: 4, H: 12 })
})
