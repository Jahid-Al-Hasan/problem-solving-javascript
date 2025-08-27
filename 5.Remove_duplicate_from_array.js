/*
Problem 5: Remove Duplicates from an Array
Write a function that removes all duplicate numbers from an array.

Example:

Input: [1, 2, 2, 3, 4, 4]
Output: [1, 2, 3, 4]
*/

// Solution:-
function removeDuplicate(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let newArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (i === 0 || sortedArr[i] !== sortedArr[i - 1]) {
      newArr.push(sortedArr[i]);
    }
  }

  return newArr;
}

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));
// console.log(removeDuplicate([4, 2, 5, 2, 3, 4, 1, 1, 7]));
