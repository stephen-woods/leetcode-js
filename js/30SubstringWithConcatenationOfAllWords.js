// You are given a string s and an array of strings words. All the strings of
// words are of the same length.
//
// A concatenated string is a string that exactly contains all the strings of
// any permutation of words concatenated.
//
// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef",
// "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is
// not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in
// s. You can return the answer in any order.
//
//
//
// Example 1:
//
// Input: s = "barfoothefoobarman", words = ["foo","bar"]
//
// Output: [0,9]
//
// Explanation:
//
// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
//
// Example 2:
//
// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
//
// Output: []
//
// Explanation:
//
// There is no concatenated substring.
//
// Example 3:
//
// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
//
// Output: [6,9,12]
//
// Explanation:
//
// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].
//
//
//
// Constraints:
//
// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // Determine the word frequency for all words in the "words" array
  const wordsFreq = new Map();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordsFreq.set(word, (wordsFreq.get(word) || 0) + 1);
  }

  // Determine the length of a concatenation of all the words in the words
  // array.
  const concatLength = words.length * words[0].length;

  // Scan through each concatentation sized substring within the string "s" and
  // check to see if it is indeed a concatenation of all of the worrds in "words".
  // If it is a concatenation, push the current index into the array to return.
  const ret = [];
  for (let i = 0; i <= s.length - concatLength; i++) {
    if (isConcatenation(s, i, concatLength, words[0].length, wordsFreq)) {
      ret.push(i);
    }
  }
  return ret;
};

/**
 * @param {string} s
 * @param {number} start
 * @param {number} numWords
 * @param {number} wordLength
 * @param {Map<string, number>} wordsFreq
 * @returns {boolean}
 */
function isConcatenation(s, start, concatLength, wordLength, wordsFreq) {
  const chunkFreq = new Map();

  // Determine the frequency of all the chunks in the concatenation substring
  // determined by the start, concatLength and wordLength params
  for (let i = start; i < start + concatLength; i += wordLength) {
    const chunk = s.substring(i, i + wordLength);
    chunkFreq.set(chunk, (chunkFreq.get(chunk) || 0) + 1);
  }

  // Now check to see if the frequency of all of the chunks is the same as
  // words frequency
  for (const [k, v] of chunkFreq) {
    if (wordsFreq.get(k) !== v) return false;
  }
  return true;
}

let s;
let words;
let answer;

(s = "barfoothefoobarman"), (words = ["foo", "bar"]);
answer = findSubstring(s, words);
console.log(answer);

(s = "wordgoodgoodgoodbestword"), (words = ["word", "good", "best", "word"]);
answer = findSubstring(s, words);
console.log(answer);

(s = "barfoofoobarthefoobarman"), (words = ["bar", "foo", "the"]);
answer = findSubstring(s, words);
console.log(answer);

(s = "wordgoodgoodgoodbestword"), (words = ["word", "good", "best", "good"]);
answer = findSubstring(s, words);
console.log(answer); // Should be [8]
