/*
Problem 6: Sum of All Numbers in an Array
Write a function that returns the sum of all numbers in an array.

Example:

Input: [1, 2, 3, 4]
Output: 10
*/

// Solution:-
function sumOfArray(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}

// console.log(sumOfArray([1, 2, 3, 4]));
