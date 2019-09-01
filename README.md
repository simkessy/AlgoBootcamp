# Data Structures | Algorithms | LeetCode Notes

## Data Structures

---

- Unordered list can use asterisks
- Unordered list can use asterisks
- Unordered list can use asterisks
- Unordered list can use asterisks

## Algorithms

---

- Unordered list can use asterisks
- Unordered list can use asterisks
- Unordered list can use asterisks

## LeetCode

---

- Unordered list can use asterisks
- Unordered list can use asterisks
- Unordered list can use asterisks

# General Notes

---

- Don't forget 0 index arrays so use (LENGTH-1) to stay within range
- Try to use **for (let x of array) {}** syntax instead of traditional forLoops
- **for(let x in obj)** let's you loop over objects - good for finding max in hasmap
- Palindrome: reverse string and test if same as original
- Array.every goes over every element in array and returns true based on some condition
- **[Array.length - index - 1]** is a good way to go backways in a forward moving loop
- **Math.floor(str.length / 2)** if you need half the length
- **Math.sign** will return -1 or 1 if number is negative or positive
- String(number) or .toString()
- parseInt() vd Number --- any difference?
- Build hash of count: **Array.reduce( (r,n)) => r[n] = ++r[n] || 1**;
- Array.slice(start, end) => but NOT INCLUDING END
- When using a WhileLoop do not forget to increment index to prevent infinite loop!
- Remove spaces in string: string.split(" ").join("")
- Remove space and specials: string.replace(/[^\w]/g, "")
- Anagrams: Once you've got sorted string just return stringA === stringB
- Recursion: Think about your base case right away - don't blow your stack
- Recursion: When calling recursively, make sure your args are different otherwise - infinite loop!

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
