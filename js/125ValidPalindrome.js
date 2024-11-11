// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it reads the
// same forward and backward. Alphanumeric characters include letters and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
//
//
// Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
//
//
// Constraints:
//
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const clean = Array.from(s.toLowerCase()).filter(isAlphaNumeric);

  for (let i = 0; i < clean.length / 2; i++) {
    const c1 = clean[i];
    const c2 = clean[clean.length - 1 - i];
    if (c1 !== c2) return false;
  }
  return true;
};

function isAlphaNumeric(c) {
  return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
}

let result;

result = isPalindrome("A man, a plan, a canal: Panama");
console.log(result);

result = isPalindrome("race a car");
console.log(result);

result = isPalindrome(" ");
console.log(result);
