/*
Problem 1: Reverse a String
Write a function that takes a string and returns it reversed.

Example:

Input: "hello"
Output: "olleh"
*/

// Solution:-
function reverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// console.log(reverse("hello"));
