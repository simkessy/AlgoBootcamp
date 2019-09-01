// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, stairs = "") {
  // Bail on first if n=1
  if (n === 1) return "#";

  // Starting index
  let index = 0;

  // Find middle
  let midPoint = Math.floor((n * 2 - 1) / 2);

  // Loop until n reached
  while (index < n) {
    // create row given lenfth of n
    let row = new Array(n * 2 - 1).fill(" ");

    // Set mid value
    row[midPoint] = "#";

    // Spread out left / right based on mid and index
    let leftPoint = midPoint - 1;
    let rightPoint = midPoint + 1;
    let leftMin = midPoint - index;
    let rightMax = midPoint + index;

    // Add you spread out, fill in spots
    // Continue until min/max reached for row
    while (leftPoint >= leftMin && rightPoint <= rightMax) {
      row[leftPoint] = "#";
      row[rightPoint] = "#";

      // Update left/right
      leftPoint--;
      rightPoint++;
    }
    // console.log("Numbers", leftMin, leftPoint, midPoint, rightPoint, rightMax);
    // Update index
    index++;

    // Log out row
    console.log(row.join(""));
  }
}

module.exports = pyramid;

// n=1 = 1 space
// n=2 = 3 space
// n=3 = 5 space
// n=4 = 7 space
// n=5 = 9 space
// space = (r*2)-1
// +2 per row

//      #       n5 > i=0 > mid=4 min= mid-i max= mid+i
//     ###      n5 > i=1 > mid=4 min= mid-i max= mid+i
//    #####     n5 > i=1 > mid=4 min= mid-i  max= mid+i
//   #######    n5 > i=2 > mid=4 min= mid-i  max= mid+i
//  #########   n5 > i=3 > mid=4 min= mid-i  max= mid+i

// n3 = 5spaces

//      #
//     ###
//    #####
