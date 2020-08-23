/**
 * DIFFICULTY: Medium
 *
 * Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every
 * character in T appears no less than k times.
 */

export function longestSubstring(str: string, k: number): number {
	if (!str.length) return 0

	const charCounts = [...str].reduce(
		(obj, char) => ({ ...obj, [char]: (obj[char] ?? 0) + 1 }),
		{} as { [c: string]: number }
	)

	for (const char of str) {
		if (charCounts[char] >= k) continue
		const possibleSolutions = str.split(char)
		return Math.max(...possibleSolutions.map((e) => longestSubstring(e, k)))
	}

	return str.length
}
