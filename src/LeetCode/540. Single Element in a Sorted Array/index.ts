/**
 * DIFFICULTY: Medium
 *
 * You are given a sorted array consisting of only integers where every element appears exactly twice,
 * except for one element which appears exactly once. Find this single element that appears only once.
 * Follow up: Your solution should run in O(log n) time and O(1) space.
 */

export function singleNonDuplicate(nums: number[]): number {
  // Mid is always placed at an even index, as every pair should start there
  let min = 0
  let max = nums.length - 2
  while (max > min) {
    let mid = Math.floor((max + min) / 2)
    if (mid % 2 !== 0) mid--
    // Not a pair? We need to go to the left
    if (nums[mid] !== nums[mid + 1]) {
      max = mid
    } else min = mid + 2 // A pair? We need to go to the right
  }
  return nums[min]
}

/*enum Side {
	LEFT,
	RIGHT
}

// O(logn) solution. Binary search. Bad code
export function singleNonDuplicate(nums: number[]): number {
	let min = 0
	let max = nums.length - 1
	let mid = Math.floor((max - min) / 2)
	while (max - min > 0) {
		const duplicateSide: Side | undefined =
			nums[mid] === nums[mid - 1] ? Side.LEFT : nums[mid] === nums[mid + 1] ? Side.RIGHT : undefined
		if (duplicateSide === undefined) return nums[mid]
		if (duplicateSide === Side.LEFT && (max - mid) % 2 !== 0) {
			// It is on the right
			min = mid + 1
			mid = min + Math.floor((max - min) / 2)
		} else if (duplicateSide === Side.RIGHT && (mid - min) % 2 !== 0) {
			// It is on the left
			max = mid - 1
			mid = min + Math.floor((max - min) / 2)
		} else if (duplicateSide === Side.LEFT) {
			max = mid - 2
			mid = min + Math.floor((max - min) / 2)
		} else if (duplicateSide === Side.RIGHT) {
			min = mid + 2
			mid = min + Math.floor((max - min) / 2)
		}
	}
	return nums[mid]
}*/

/*
// O(n) solution
export function singleNonDuplicate(nums: number[]): number {
	return nums.reduce((x, y) => x ^ y, 0)
}*/
