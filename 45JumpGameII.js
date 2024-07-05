// You are given a 0-indexed array of integers nums of length n. You are 
// initially positioned at nums[0].
//
// Each element nums[i] represents the maximum length of a forward jump from index
// i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
//
// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are 
// generated such that you can reach nums[n - 1].
//
//  
//
// Example 1:
//
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1
// step from index 0 to 1, then 3 steps to the last index.
// Example 2:
//
// Input: nums = [2,3,0,1,4]
// Output: 2
//  
// Constraints:
//
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].
//
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if (nums.length === 1) {
    return 0;
  }

  const hops = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER); 
  hops[0] = 0;

  for (let pos = 0; pos < nums.length; pos++) {
    // How far can we jump from the current position
    const distance = nums[pos];

    // The least number of jumps we need to do to get to the current position plus
    // an additional jump to reach the positions within range.
    const next = hops[pos] + 1;

    // The farthest we can jump from the current position
    const limit = Math.min(pos + distance, nums.length - 1);

    // Update the hops within range
    for (let j = pos + 1; j <= limit; j++) {

      // if we got to this new position in less hops, update
      if (hops[j] > pos + 1) {
        hops[j] = next;
      }
    }
  }
  return hops[hops.length - 1];
};


let input1 = [2,3,1,1,4];
let test1 = jump(input1);
console.log(test1);


let input2 = [2,3,0,1,4];
let test2 = jump(input2);
console.log(test2);

let input3 = [1,2];
let test3 = jump(input3);
console.log(test3);
