// Given a string s, find the length of the longest
// substring without repeating characters.
//
// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//
//
// Constraints:
//
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ascii = new Array(128).fill(-1);
  let left = 0;
  let answer = 0;

  for (let right = 0; right < s.length; right++) {
    let code = s.charCodeAt(right);
    let last = ascii[code];
    if (last >= left) {
      left = last + 1;
    }
    ascii[code] = right;
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
};

let s;
let result;

s = "abcabcbb";
result = lengthOfLongestSubstring(s);
console.log(result);

s = "bbbbb";
result = lengthOfLongestSubstring(s);
console.log(result);

s = "pwwkew";
result = lengthOfLongestSubstring(s);
console.log(result);

s = "tmmzuxt";
result = lengthOfLongestSubstring(s);
console.log(result); // Should be 5

s = "bbtablud";
result = lengthOfLongestSubstring(s);
console.log(result); // Should be 6
