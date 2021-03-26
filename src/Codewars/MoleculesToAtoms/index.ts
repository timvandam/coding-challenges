/*
 * https://www.codewars.com/kata/molecule-to-atoms/train/javascript
 */

const braces: Record<string, string> = {
  '{': '}',
  '[': ']',
  '(': ')',
}

function multiplyObjectValues(obj: Record<string, number>, scalar: number): void {
  if (scalar === 1) return
  for (const [k, v] of Object.entries(obj)) obj[k] = v * scalar
}

function addObjectValues(obj1: Record<string, number>, obj2: Record<string, number>): void {
  for (const [k, v] of Object.entries(obj2)) {
    obj1[k] ??= 0
    obj1[k] += v
  }
}

type Counts = Record<string, number>

const isBrace = (str: string) => Object.keys(braces).includes(str)

const isAtom = (str: string): boolean => Boolean(str.match(/^[A-Z][a-z]?[0-9]*/))
const getAtom = (str: string): [atom: string, count: number, symbol: string] => {
  const [match, formula, count] = str.match(/^([A-Z][a-z]?)([0-9]*)/) as RegExpMatchArray
  return [formula, parseInt(count || '1', 10), match]
}

export function parse(formula: string, closingBrace?: string): [counts: Counts, str: string] {
  const counts: Counts = {}
  for (let i = 0; i < formula.length; i++) {
    const str = formula.slice(i)
    const char = formula.charAt(i)
    if (isAtom(str)) {
      const [atom, count, symbol] = getAtom(str)
      i += symbol.length - 1
      counts[atom] ??= 0
      counts[atom] += count
    } else if (isBrace(char)) {
      const [cnts, symbol] = parse(str.slice(1), braces[char])
      addObjectValues(counts, cnts)
      i += symbol.length
    } else if (closingBrace && closingBrace === char) {
      const rest = formula.slice(i + 1)
      const [count] = rest.match(/^[0-9]*/) as RegExpMatchArray
      const j = i + 1 + count.length
      const c = parseInt(count || '1', 10)
      multiplyObjectValues(counts, c)
      return [counts, formula.slice(0, j)]
    } else throw new Error('Invalid formula')
  }

  return [counts, formula]
}

export function parseMolecule(formula: string): Counts {
  return parse(formula)[0]
}
