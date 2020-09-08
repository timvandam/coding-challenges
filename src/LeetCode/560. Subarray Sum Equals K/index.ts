/**
 * DIFFICULTY: Medium
 *
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.
 */

// Return the amount of combinations of i,j with j > i for which sum(i, j) = k.
export function subarraySum(nums: number[], k: number): number {
	if (!nums.length) return 0

	let sum = 0 // cumulative sum
	let count = 0 // amount of times sum(i, j) = k

	/**
	 * sum(i, j) = sum(0, j) - sum(0, i)
	 *
	 * Map contains the amount of times a certain sum has occurred
	 */
	const sumCount: Record<number, number> = { 0: 1 }

	// Loop through sum(0, j)
	for (let j = 0; j < nums.length; j++) {
		// Keep track of the cumulative sum
		sum += nums[j]

		// Add the amount of times we can reach k from sum(0, j)
		count += sumCount[sum - k] ?? 0

		// Update the sumCount
		sumCount[sum] = (sumCount[sum] ?? 0) + 1
	}

	return count
}
