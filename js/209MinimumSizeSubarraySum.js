// Given an array of positive integers nums and a positive integer target, return
// the minimal length of a subarray whose sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.
//
//
//
// Example 1:
//
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:
//
// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:
//
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
//
//
// Constraints:
//
// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let answer = Number.POSITIVE_INFINITY;

  while (right < nums.length && answer !== 1) {
    sum += nums[right];

    while (sum >= target && answer != 1) {
      answer = Math.min(answer, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
    right += 1;
  }
  if (answer === Number.POSITIVE_INFINITY) return 0;
  return answer;
};

let target;
let nums;
let result;

target = 7;
nums = [2, 3, 1, 2, 4, 3];
result = minSubArrayLen(target, nums);
console.log(result);

target = 4;
nums = [1, 4, 4];
result = minSubArrayLen(target, nums);
console.log(result);

target = 11;
nums = [1, 1, 1, 1, 1, 1, 1, 1];
result = minSubArrayLen(target, nums);
console.log(result);

target = 15;
nums = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];
result = minSubArrayLen(target, nums);
console.log(result);
