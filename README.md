# Data Structures | Algorithms | LeetCode Notes

## Data Structures

---

- Queue: FIFO - could build using nodes (more efficient) or array and their methods (push pop etc.)
- Stack: LIFO - could build using nodes (more efficient) or array and their methods (push pop etc.)
- For both Queue and Stack above don't forget to clean up head and last if removing last item
  - ie: if(this.first === this.last)
- Queue From Stack: use two stacks and reorg values from one to the other
- Linked Lists:
  - Midpoint: use the slow and fast technique (ie: slow = slow.next fast = fast.next.next)
  - Circular ref check: use slow and fast and test if they're ever ===
  - Find n value from last: slow = list.getFirst; fast = list.getAt(n); etc
- Trees:
  - Breath-First: like reading, start from top go left to right
    - Traversing: [root] > while(arr.length) > shift() + [].push(children) > cb(node)
  - Depth0-First: Go top down top down from left to right - Traversing: [root] > while(arr.length) > shift() + [].unshift(children) > cb(node)
- Binary Search Tree:
  - each node can only have 2 children
  - LEFT node must be LESS than parent and root
  - RIGHT node must be GREATER than parent and root
  - Validate:

## Sorting Algorithms

---

- No one has ever been asking to implement a sorting algo
- BubbleSort:
- SelectionSort:
- MergeSort:
- QuickSort:

## LeetCode

---

- Unordered list can use asterisks
- Unordered list can use asterisks
- Unordered list can use asterisks

# General Notes

---

- Don't forget arrays are 0 index so use **Array.length-1** to stay within range
- Try to use **for (let x of array) {}** syntax instead of traditional forLoops
- **for(let x in obj)** let's you loop over objects - good for finding max in hasmap
- Palindrome: reverse string and test if same as original
- **Array.every** goes over every element in array and returns true based on some condition
- **[Array.length - index - 1]** is a good way to go backways in a forward moving loop
- **Math.floor(str.length / 2)** if you need half the length
- **Math.sign** will return -1 or 1 if number is negative or positive
- String(number) or .toString()
- parseInt() vs Number --- any difference?
- Build hash of count: **Array.reduce( (r,n)) => r[n] = ++r[n] || 1**;
- Array.slice(start, end) => but NOT INCLUDING END
- When using a WhileLoop do not forget to increment index to prevent infinite loop!
- Remove spaces in string: string.split(" ").join("")
- Remove space and specials: string.replace(/[^\w]/g, "")
- Anagrams: Once you've got sorted string just return stringA === stringB
- Recursion: Think about your base case right away - don't blow your stack
- Recursion: When calling recursively, make sure your args are different otherwise - infinite loop!
- Always consider **casing** when dealing with strings
- REGEX: str.match(/[aeiou]/gi); //g-don't stop at first //i-case insensitive
- Fibonacci: 2 Solutions Brute Force & Recursion O(2^n) BAD!
  - Recursion fn(n) =>{ if n< 2 return n; return fib(n-2 + fib(n-1))}
  - **MEMOIZE** fib to only call fn w new args for massive speed improvements
- Pattern to join arrays:
  - while(arr1.next() || arr2.next()) { if(arr1.next(){}){} if(arr2.next(){})}
- fn.call vs fn.apply are the same except apply accepts an array: **fn.apply(this, [args])
  **
- Pushing nested array: array.push(...array2)

# JEST Notes

---

- expect(fn).toBeDefined()
- expect().toEqual()
- expect(fn(arg)).toBeTruthy()
- expect(fn(arg)).toBeFalsy()
- expect(typeof palindrome).toEqual('function')
- beforeEach : Run a method before each test
- afterEach : Run a method after each call
- jest.spyOn(console, 'log'): watch the console.log method (creates a mock)
  - fn.mockRestore(): restores the original (non-mocked) implementation.
  - expect(console.log.mock.calls[0][0]).toEqual(1)
- describe.skip skips tests
