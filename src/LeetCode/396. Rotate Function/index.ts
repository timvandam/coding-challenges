/**
 * DIFFICULTY: Medium
 *
 * Given an array of integers A and let n to be its length.
 * Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:
 * F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
 * Calculate the maximum value of F(0), F(1), ..., F(n-1).
 */

export function maxRotateFunction(arr: number[]): number {
	const arraySum = arr.reduce((x, y) => x + y, 0)
	let sum = arr.reduce((acc, num, i) => acc + i * num, 0) // initial sum
	let max = sum
	for (let i = 0; i < arr.length - 1; i++) {
		// Try all combinations
		// The next combination adds one of each entry (because their index gets incremented), but the last entry (at index arr.length - 1 - i) becomes zero.
		// Since it becomes zero we should subtract it (arr.length - 1) (maximum index) times. Because arraySum already adds this number once, I subtract it one more time,
		// making me subtract (arr.length) times
		sum += arraySum - arr.length * arr[arr.length - 1 - i]
		max = Math.max(max, sum)
	}

	return max
}
