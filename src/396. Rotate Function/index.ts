/**
 * Given an array of integers A and let n to be its length.
 * Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:
 * F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].
 * Calculate the maximum value of F(0), F(1), ..., F(n-1).
 */

export function maxRotateFunction (arr: number[]): number {
	if (!arr.length) return 0
	let sum = F(arr)
	let max = sum
	for (let i = 0; i < arr.length - 1; i++) {
		// Try all combinations
		// The next combination adds one of each entry (because their index gets incremented), but the last entry (arr.length - 1 - i) becomes zero.
		// Since it becomes zero we should subtract it (arr.length - 1) (maximum index) times. Instead I do it once more, but also add once more in the reduce statement.
		// This is simply due to code cleanliness
		sum = sum + arr.reduce((x, y) => x + y, 0) - arr.length * arr[arr.length - 1 - i]
		console.log(sum)
		max = Math.max(max, sum)
	}

	return max
}

function F (arr: number[]) {
	return arr.reduce((acc: number, num: number, i: number) => acc + i * num, 0)
}
