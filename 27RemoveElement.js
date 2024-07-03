// Given an integer array nums and an integer val, remove all occurrences of
// val in nums in-place. The order of the elements may be changed. Then return
// the number of elements in nums which are not equal to val.
//
// Consider the number of elements in nums which are not equal to val be k, to
// get accepted, you need to do the following things:
//
// Change the array nums such that the first k elements of nums contain the 
// elements which are not equal to val. The remaining elements of nums are not 
// important as well as the size of nums.
//
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0;

  for (let x = 0; x < nums.length; x++) {
    const element = nums[x];
    if (element != val) {
      nums[k++] = element;
    }
  }
  return k;
};

// 
let test1 = removeElement([3,2,2,3],3);
console.log(test1);

// Output: 5, nums = [0,1,4,0,3,_,_,_]
let test2 = removeElement([0,1,2,2,3,0,4,2],2);
console.log(test2);
