/**
 * Create a FAST method that can generate the first 1000 rows of pascal's triangle
 *
 */

/**
 * Returns the n-th row of pascal's triangle
 *
 * This is O(1 + 2 + 3 + ... + n) = O(n(n+1)/2) = O(n^2)
 */
export function pascal(row: number): number[] {
	const dp: number[][] = [[1]]

	function go(rows: number): number[] {
		if (dp[rows]) return dp[rows]

		const previousRow = go(rows - 1)
		const row = Array(previousRow.length + 1)
		for (let i = 0; i < row.length; i++) {
			row[i] = (previousRow[i - 1] ?? 0) + (previousRow[i] ?? 0)
		}

		dp[rows] = row

		return row
	}

	return go(row)
}
