/**
 * DIFFICULTY: Medium
 *
 * Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
 */

/**
 * T(n) = 1
 * O(1)
 *
 * This solution is perfectly reasonable as 0 <= n <= 8
 */
const results = [1, 10, 91, 739, 5275, 32491, 168571, 712891, 2345851]
export function countNumbersWithUniqueDigits(n: number): number {
	return results[n]
}

/**
 * T(n) = n(n+1)/2 + c
 * O(n^2)
 *
 * This is better than a recursive approach as now we don't let the call stack build up (space O(1), recursive = space O(n))
 */
/*export function countNumbersWithUniqueDigits(n: number): number {
	if (n === 0) return 1
	let result = 1
	while (n > 0) {
		let temp = 1
		for (let i = 0; i < n; i++) {
			temp *= Math.min(10 - i, 9)
		}
		result += temp
		n--
	}
	return result
}*/
