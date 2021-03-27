/**
 * DIFFICULTY: Medium
 *
 * Design a stack which supports the following operations.
 * Implement the CustomStack class:
 * CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
 *  void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
 *  int pop() Pops and returns the top of stack or -1 if the stack is empty.
 *  void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.
 */

class CustomStack {
  private readonly stack: number[] = []

  constructor(private maxSize: number) {}

  push(x: number): void {
    if (this.stack.length === this.maxSize) return
    this.stack.push(x)
  }

  pop(): number {
    return this.stack.pop() ?? -1
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < Math.min(k, this.stack.length); i++) this.stack[i] += val
  }
}
