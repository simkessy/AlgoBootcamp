## Notes

- **Reverse:**
  - string: split.reverse.join
  - split.reduce(ltr + text)
- **Palindrome:**
  - reverse and check
  - check first and last ltr > move in (length-idx-1) > if !== > false
  - create arr1 = [first half] > arr2 [reversed 2nd half] > join and check ===
- **Reverse Int:**:
  - num.toString().split.reverse.join \* Math.sign(num)
- **MaxChar:**
  - let max;maxChar > create countMap > loop obj > set max/maxChar if > max
- **Fizzbuzz:**
  - if (i % 5 === 0 && i % 3 === 0) > if (i % 5 === 0) > if (i % 3 === 0)
- **ChunkArray:**
  - loop length-1 > result.push(arr.slice(i, i+size))
  - forIn(arr) > get last > ? last.length==size ? > result.push([item]) : last.push(item)
- **Anagram:**
  - str.replace(/[^\w]/g, "").lower.split.sort.join > str === reversed?
  - clean > map count > forIn > forIn(object) > if a[x] !== b[x] > false
- **Capitalize:**
  - str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
- **Steps:**
  - Array(n).fill() > forEach > stapArr[idx] ="#" > step.join
  - nestedLoop > if(col < row) start+="#" else start+=" "
  - Recursion: steps(n, row=0, s="") { // code // }
    - check if n === row ? return
    - if n === s.length > steps(n, row + 1)
    - add => s.length <= s.length <= row ? "#" : " ";
    - steps(n, row, stair+add)
- **Pyramid:**
  - Naive: calc mid > while < n > set left/right Point/max > set "# until maxes, increment counters
  - Recursive: if (mid - row <= str.length && mid + row >= str.length)
    - call it when you've reached row lenth: pyramid(n, row+1)
    - call it when you've added: pyramid(n, row, level+add)
- **Vowels:**
  - str.match(/[aeiou]/gi).length
  - forOf(str) {['a', 'e', 'i', 'o', 'u'].includes(ltr) count++}
- **Spiral Matrix:**
  - Build matrix structure with forLoop
  - Setup 4 vars: start / end column start / end row + counter - while(startCol<endCol && startRow<endRow) - loop 4 times - startRow++ >endCol-- > endRow-- > startCol++
- **Queue:**
  - First in, first out - Node{ this.data this.next } - Array with unshift() / pop()
- **Queue Weaving:**
  - while(q1.peek && q2.peek) {?q1.peek > q1.add && ?q2.peek > q2.add}
- **Stack:**
  - Last in first out
  - Array with push and pop - Node{ this.data this.next }
- **Queue From Stack:**
  - Use 2 stacks to mimique Queue behaviour
  - Push everything from q1 to q2, then from q2 pop top item
  - Then push remaining back to q1 > return popped item
- **LinkedList:**
  - Node {constructor(d, n=null)}
  - MidPoint: slow=first fast=first > while(fast.next && fast.next.next)
  - IsCircular: use mid but if slow===fast return true
  - nthLast: slow.first / fast=getAt(n) while(fast.next)
- **Tree:**
  - Node {this.data; this.children=[]}
  - To traverse (any method), use a processing node [this.root]
  - traverseBF: left to right row by row
    - remove first, push it's chilren to pArr
    - while(pArr.length) {pArr.shift(); [...pArr, node.children]}
  - traverseBF: left to right row by row
    - remove first, push it's chilren to pArr
    - while(pArr.length) {pArr.shift(); [node.children, ...pArr]}
- **Tree Width:**
  - use a process arr with root and a stopping indicator: [root, "s"] counter = [0]
  - while (arr.length>1) > arr.shift if(nd === "s") add new counter [1,0], arr.push(s)
  - if not at stop-gap, add nd.children to arr and update the last counter [1,1]
- **BST:**
  - node {data, left,right}
  - _insert(val)_: if (val < this.data && this.left) this.left.insert(val) : this.left=node
  - _contain_: if (data > this.data && this.right) this.right.contains(data) / flip right
  - stop when data === this.data
  - _validate_: validate(node, min=null, max=null)
    - 1: if (max !== null && node.data > max) return false;
    - 2: if (min !== null && node.data < min) return false;
    - 3: if (node.left && !validate(node.left, min, node.data)) return false;
    - 4: if (node.right && !validate(node.right, node.data, max)) retur
- **Sorting:**
  - Bubble: nested for loop, swap when j > i
  - Selection: nested loop through, find smallest, swap to front, repeat
  - mergeSort: build mergeFx(left,right) {while length, push left or right depending on which is large > return [...r,...left,...right]
    - MergeSort(left,right) > let left/right or arr > merge(mergeSort(left), mergeSort(right))