/**
 * DIFFICULTY: Medium
 *
 * Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors.
 * If there is no such integer in the array, return 0.
 */

export function sumFourDivisors(nums: number[]): number {
  return nums.reduce((x, y) => x + (divisors[y][0] === 4 ? divisors[y][1] : 0), 0)
}

function sum(...numbers: number[]): number {
  return numbers.reduce((x, y) => x + y, 0)
}

// I'm using a proxy for dynamic programming
type Divisors = { [k: number]: [number, number] }
const divisors = new Proxy<Divisors>(
  {},
  {
    get(target, p: PropertyKey, receiver: Divisors): number[] {
      p = parseInt(String(p), 10)
      if (Number.isNaN(p)) throw new Error('PropertyKey must be a number')
      if (target[p]) return target[p]

      const divs = new Set<number>()
      for (let i = 1; i <= Math.sqrt(p); i++) {
        if (p % i !== 0) continue
        divs.add(i)
        divs.add(p / i)
      }
      target[p] = [divs.size, sum(...divs)]

      return target[p]
    },
  }
)
