// Given an array of integers citations where citations[i] is the number of
// citations a researcher received for their ith paper, return the researcher's
// h-index.
//
// According to the definition of h-index on Wikipedia: The h-index is defined
// as the maximum value of h such that the given researcher has published at
// least h papers that have each been cited at least h times.
//
// Example 1:
//
// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each
// of them had received 3, 0, 6, 1, 5 citations respectively. Since the
// researcher has 3 papers with at least 3 citations each and the remaining two
// with no more than 3 citations each, their h-index is 3.
//
// Example 2:
//
// Input: citations = [1,3,1]
// Output: 1
//
//
// Constraints:
//
// n == citations.length
// 1 <= n <= 5000
// 0 <= citations[i] <= 1000

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // Invert the citations counts. Heavily cited papers don't impact the determination of the H-Index.
  // So if a paper has more than n citations (where n is the number of papers), just treat it as if
  // it has n citations.
  let counts = new Array(citations.length + 1).fill(0);
  for (let c of citations) {
    if (c > citations.length) {
      c = citations.length;
    }
    counts[c]++;
  }

  // Traverse the inverted citation counts in reverse order until you find the intersection
  // between the current inverted count and the number of papers that have been cited so far
  let sum = 0;
  let i = citations.length;
  while (sum >= 0) {
    sum += counts[i];
    if (sum >= i) {
      break;
    }
    i--;
  }

  return i;
};
console.log("Example 1");
let input1 = [3, 0, 6, 1, 5];
let test1 = hIndex(input1);
console.log(test1);

console.log("Example 2");
let input2 = [1, 3, 1];
let test2 = hIndex(input2);
console.log(test2);
