/*
Problem 3: Check for Palindrome
Write a function that checks if a string is a palindrome (reads the same forward and backward).

Example:

Input: "madam"
Output: true

Input: "hello"
Output: false
*/

// Solution:-
function palindrome(str) {
  let pointer1 = 0;
  let pointer2 = str.length - 1;

  while (pointer1 < pointer2) {
    if (str[pointer1] !== str[pointer2]) {
      return false;
    }
    pointer1++;
    pointer2--;
  }
  return true;
}

// console.log(palindrome("madam"));
// console.log(palindrome("hello"));
