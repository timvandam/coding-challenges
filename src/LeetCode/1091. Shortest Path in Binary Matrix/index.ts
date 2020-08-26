/**
 * DIFFICULTY: Medium
 *
 * In an N by N square grid, each cell is either empty (0) or blocked (1).
 * A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:
 * - Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
 * - C_1 is at location (0, 0) (ie. has value grid[0][0])
 * - C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
 * - If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
 *
 * Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.
 */

const getNeighbors = (n: number, x: number, y: number): [number, number][] => {
	const neighbors: [number, number][] = []
	for (let dx = -1; dx <= 1; dx++) {
		const nx = x + dx
		if (nx >= n || nx < 0) continue
		for (let dy = -1; dy <= 1; dy++) {
			const ny = y + dy
			if (ny >= n || ny < 0) continue
			if (dx === 0 && dy === 0) continue
			neighbors.push([nx, ny])
		}
	}
	return neighbors
}

/**
 * The grid is pretty much an unweighted graph, so we can use BFS to find the quickest path.
 */
export function shortestPathBinaryMatrix(grid: number[][]): number {
	if (!grid.length) return 0
	const n = grid.length
	const q: [x: number, y: number, distance: number][] = [[-1, -1, 0]] // start outside of the grid to ensure (0, 0) != 1
	const known = new Map<number, Set<number>>(Array(n).fill(undefined).map((_, i) => [i, new Set<number>()]))
	while (q.length) {
		const [x, y, distance] = q.shift() as [number, number, number]
		for (const [nx, ny] of getNeighbors(n, x, y)) {
			if (grid[nx][ny]) continue // skip 1s
			if (known?.get(nx)?.has(ny)) continue // skip if coord already handles
			known.get(nx)?.add(ny)
			if (nx === n - 1 && ny === n - 1) return distance + 1 // if found, return
			q.push([nx, ny, distance + 1])
		}
	}
	return -1
}
