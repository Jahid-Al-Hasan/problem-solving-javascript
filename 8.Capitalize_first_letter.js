/*
Problem 8: Capitalize First Letter of Each Word
Write a function that capitalizes the first letter of each word in a string.

Example:

Input: "hello world"
Output: "Hello World"
*/

// Solution:-
function capitalize(str) {
  const newStr = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return newStr;
}

// console.log(capitalize("hello world"));
