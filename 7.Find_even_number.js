/*
Problem 7: Find Even Numbers in an Array
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]
*/

// solution:-
function findEven(arr) {
  let newArr = [];
  for (let i of arr) {
    if (i % 2 === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

// console.log(findEven([0, 1, 2, 3, 4, 5, 6]));
