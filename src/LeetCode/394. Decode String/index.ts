/**
 * DIFFICULTY: Medium
 *
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated
 * exactly k times. Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those
 * repeat numbers, k. For example, there won't be input like 3a or 2[4].
 */

export function decodeString (str: string): string {
	let result = ''

	for (let i = 0; i < str.length; i++) {
		const char = str[i]
		if (isNumber(char)) {
			const k = parseInt(str.slice(i).match(/([1-9][0-9]*)/)?.[1] ?? '0')
			let chars = ''
			let bracketCount = 1
			for (const char of str.slice(i + k.toString().length + 1)) {
				if (char === '[') bracketCount++
				else if (char === ']') bracketCount--
				if (bracketCount !== 0) chars += char
				else break
			}
			result += decodeString(chars).repeat(k)
			i += k.toString().length + chars.length + 1
		} else result += char
	}

	return result
}

function isNumber (num: unknown): num is number {
	return !Number.isNaN(Number(num))
}
