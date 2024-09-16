// You are given two integer arrays nums1 and nums2, sorted in non-decreasing
// order, and two integers m and n, representing the number of elements in
// nums1 and nums2 respectively.
//
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//
// The final sorted array should not be returned by the function, but instead
// be stored inside the array nums1. To accommodate this, nums1 has a length
// of m + n, where the first m elements denote the elements that should be
// merged, and the last n elements are set to 0 and should be ignored. nums2
// has a length of n.
//
// Example 1:
//
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements
// coming from nums1.
//
// Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:
//
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there
// to ensure the merge result can fit in nums1.

var merge1 = function (nums1, m, nums2, n) {
  const total = m + n;
  const ret = [];

  let i = 0;
  let x = 0;
  let y = 0;
  while (i < total) {
    if (x >= m || nums2[y] < nums1[x]) {
      ret.push(nums2[y]);
      y++;
    } else {
      ret.push(nums1[x]);
      x++;
    }
    i++;
  }

  for (let i = 0; i < total; i++) {
    nums1[i] = ret[i];
  }
  return nums1;
}



var merge = function (nums1, m, nums2, n) {
  let x = m - 1;
  let y = n - 1;
  let z = m + n - 1;

  while (y >= 0) {
    if (x >= 0 && nums1[x] > nums2[y]) {
      nums1[z] = nums1[x];
      x--;
    } else {
      nums1[z] = nums2[y];
      y--;
    }
    z--;
  }
}

let test1nums1 = [1,2,3,0,0,0];
let test1nums2 = [2,5,6];
merge(test1nums1, 3, test1nums2, 3);
console.log(test1nums1);

let test2nums1 = [1];
let test2nums2 = [];
merge(test2nums1, 1, test2nums2, 0)
console.log(test2nums1);

let test3nums1 = [0];
let test3nums2 = [1];
merge(test3nums1, 0, test3nums2, 1)
console.log(test3nums1);
