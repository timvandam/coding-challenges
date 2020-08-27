/**
 * DIFFICULTY: Medium
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 */

/**
 * Create count map: O(n)
 * Create buckets: O(n)
 * Read buckets: O(k)
 * Time complexity = 2O(n) + O(k) = O(n) as k <= n
 */
export function topKFrequent(nums: number[], k: number): number[] {
	// Map of counts
	const counts = new Map<number, number>()
	for (const num of nums) counts.set(num, (counts?.get(num) ?? 0) + 1)
	if (counts.size === k) return [...counts.keys()]

	const buckets: number[][] = Array(nums.length + 1)
		.fill(undefined)
		.map(() => []) // count => [nums]
	for (const [num, count] of counts.entries()) buckets[count].push(num)

	const result: number[] = []
	for (let i = buckets.length - 1; i >= 0; i--) {
		const bucket = buckets[i]
		const remaining = k - result.length
		result.push(...bucket.slice(0, remaining))
		if (result.length === k) break
	}

	return result
}

/**
 * This is a worse solution, but still meets the requirements of being faster than O(nlogn)
 *
 * Creating map: O(n)
 * Creating heap: O(k)
 * Getting k heap elements: O(nlogk)
 * Worst case time complexity: O(n) + O(k) + O(nlogk) = O(nlogk)
 * If k==n it will only take O(n) time due to the return statement on line 19
 * So, in all cases this solution will be more efficient than O(nlogn)
 */
export function _topKFrequent(nums: number[], k: number): number[] {
	// Map of counts
	const counts = new Map<number, number>()
	for (const num of nums) counts.set(num, (counts?.get(num) ?? 0) + 1)
	if (counts.size === k) return [...counts.keys()]

	// Create heap with weights being count
	const heap = new MaxHeap(counts.size)
	for (const [value, count] of counts.entries()) heap.insert(count, value)

	const result: number[] = []
	for (let i = 0; i < k; i++) result.push(heap.poll() as number)

	return result
}

type HeapNode = [number, number] /* [key, value][] */
class MaxHeap {
	private data!: HeapNode[]
	private size = 0

	constructor(initialSize = 0) {
		this.data = Array(initialSize)
	}

	private static getParent(i: number): number {
		return Math.floor((i - 1) / 2)
	}

	private static getLeftChild(i: number): number {
		return 2 * i + 1
	}

	private static getRightChild(i: number): number {
		return 2 * i + 2
	}

	private hasNode(i: number): boolean {
		return i >= 0 && i < this.size
	}

	private hasParent(i: number): boolean {
		return this.hasNode(MaxHeap.getParent(i))
	}

	private hasLeftChild(i: number) {
		return this.hasNode(MaxHeap.getLeftChild(i))
	}

	private hasRightChild(i: number) {
		return this.hasNode(MaxHeap.getRightChild(i))
	}

	private swap(i: number, j: number) {
		;[this.data[i], this.data[j]] = [this.data[j], this.data[i]]
	}

	private heapifyUp(i = this.size - 1): void {
		while (this.hasParent(i)) {
			const parent = MaxHeap.getParent(i)
			const [parentKey] = this.data[parent]
			const [currentKey] = this.data[i]
			if (currentKey > parentKey) this.swap(i, parent)
			else break
			i = parent
		}
	}

	private heapifyDown(i = 0): void {
		// has left child <=> has children
		while (this.hasLeftChild(i)) {
			const children = [MaxHeap.getLeftChild(i), MaxHeap.getRightChild(i)].filter((i) => this.hasNode(i))
			if (!children.length) break // no children -> stop heapifying
			// Select the maximum child to trade with
			const maxChild = children.reduce((maxChild, child) =>
				this.data[child][0] > this.data[maxChild][0] ? child : maxChild
			)
			if (this.data[maxChild][0] < this.data[i][0]) break // stop swapping if maxChild shouldnt be swapped
			// Swap with maxchild, and keep going from there
			this.swap(i, maxChild)
			i = maxChild
		}
	}

	insert(key: number, value: number): void {
		this.data[this.size++] = [key, value]
		this.heapifyUp()
	}

	poll(): number | undefined {
		if (!this.size) return undefined

		// Swap root and last element
		this.swap(0, --this.size)
		const [, rootValue] = this.data[this.size]
		this.heapifyDown(0)

		return rootValue
	}
}
