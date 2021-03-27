/**
 * Create a FAST method that can generate the first 1000 rows of pascal's triangle
 *
 */

/**
 * Returns up to the the n-th row of pascal's triangle
 *
 * This is O(1 + 2 + 3 + ... + n) = O(n(n+1)/2) = O(n^2)
 */
export function pascal(row: number): number[][] {
  const dp: number[][] = [[1]]

  for (let i = 1; i <= row; i++) {
    const previousRow = dp[i - 1]
    dp[i] = Array(i + 1)
      .fill(undefined)
      .map((_, j) => (previousRow[j - 1] ?? 0) + (previousRow[j] ?? 0))
  }

  return dp
}
