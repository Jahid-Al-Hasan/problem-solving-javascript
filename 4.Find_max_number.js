/*
Problem 4: Find the Maximum Number
Write a function that takes an array of numbers and returns the largest number.

Example:

Input: [5, 1, 9, 3]
Output: 9
*/

// Solution:-
function maxNum(arr) {
  let largestNum = arr[0];
  for (let i of arr) {
    if (i > largestNum) {
      largestNum = i;
    }
  }
  return largestNum;
}

// console.log(maxNum([5, 1, 9, 3]));
// console.log(maxNum([-5, -1, -9, -3]));
