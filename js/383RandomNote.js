// Given two strings ransomNote and magazine, return true if ransomNote can be
// constructed by using the letters from magazine and false otherwise.
//
// Each letter in magazine can only be used once in ransomNote.
//
//
//
// Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
//
//
// Constraints:
//
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let letters = new Array(26).fill(0);
  for (let c of magazine) {
    let i = c.charCodeAt(0) - 97;
    letters[i]++;
  }

  let ret = true;
  for (let c of ransomNote) {
    let i = c.charCodeAt(0) - 97;
    letters[i]--;
    if (letters[i] < 0) {
      ret = false;
      break;
    }
  }
  return ret;
};

let ransomNote, magazine, result;

ransomNote = "a";
magazine = "b";
result = canConstruct(ransomNote, magazine);
console.log(result);

ransomNote = "aa";
magazine = "ab";
result = canConstruct(ransomNote, magazine);
console.log(result);

ransomNote = "aa";
magazine = "aab";
result = canConstruct(ransomNote, magazine);
console.log(result);
