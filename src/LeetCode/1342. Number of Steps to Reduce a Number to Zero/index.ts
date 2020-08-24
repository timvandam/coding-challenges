/**
 * DIFFICULTY: Medium
 *
 * Given a non-negative integer num, return the number of steps to reduce it to zero.
 * If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 */

export function numberOfSteps(num: number): number {
	if (num === 0) return 0
	return numberOfSteps(num % 2 === 0 ? num / 2 : num - 1) + 1
}

// An iterative approach would be more memory efficient, as this recursive solution causes the call stack to build up.
