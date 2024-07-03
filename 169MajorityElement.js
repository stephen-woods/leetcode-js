// Given an array nums of size n, return the majority element.
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You
// may assume that the majority element always exists in the array.
//
//
// Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
//  
//
// Constraints:
//
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
//  
//
// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let ret;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      ret = nums[i];
      count++;
    } else if (nums[i] == ret) {
      count++;
    } else {
      count--;
    }
  }
  return ret;
};

let input1 = [3,2,3];
let test1 = majorityElement(input1);
console.log(input1);
console.log(test1);

let input2 = [2,2,1,1,1,2,2];
let test2 = majorityElement(input2);
console.log(input2);
console.log(test2);


let input3 = [6,5,5];
let test3 = majorityElement(input3);
console.log(input3);
console.log(test3);
