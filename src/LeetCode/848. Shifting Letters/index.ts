/**
 * DIFFICULTY: Medium
 *
 * We have a string S of lowercase letters, and an integer array shifts.
 * Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
 * For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
 * Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.
 * Return the final string after all such shifts to S are applied.
 */

export function shiftingLetters(chars: string, shifts: number[]): string {
	/**
	 * Strategy: We know that the first character will always have to shift every time, so it will shift sum(shifts) times.
	 * The next character will have to shift the same amount - shifts[0]. The next the same amount - shifts[0] - shifts[1].
	 * We can memoize that last part and subtract it from the total sum on each iteration to quickly get an array of the
	 * amount of shifts each character has to do. We can then return shifted characters using that array of shift counts.
	 *
	 * Alternative (easier):
	 * Iterate through the characters in reverse to create the shiftsPerChar array, saving the sum of shifts and adding
	 * shifts[i] at every iteration.
	 */
	const shiftSum = sum(...shifts)
	let prevShiftsSum = 0
	const shiftsPerChar: number[] = shifts.map((charShift, i) => {
		const res = shiftSum - prevShiftsSum
		prevShiftsSum += charShift
		return res
	})
	return [...chars].map((char, i) => shift(char, shiftsPerChar[i])).join('')
}

function sum(...nums: number[]): number {
	return nums.reduce((x, y) => x + y, 0)
}

function shift(char: string, i: number): string {
	const aCharCode = 'a'.charCodeAt(0)
	return String.fromCharCode(((char.charCodeAt(0) - aCharCode + i) % 26) + aCharCode)
}
