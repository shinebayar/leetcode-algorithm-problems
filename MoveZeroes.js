// 283. Move Zeroes
// Easy like=10830 unlike=262

// Add to List

// Share
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?
// Accepted
// 1,870,213
// Submissions
// 3,057,709



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Approach 1: Using two pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
 var moveZeroes = function(nums) {
    let j=0

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            let tmp = nums[j]
            nums[j] = nums[i]
            nums[i] = tmp
            j++
        }
    }
    
    return nums
};

console.log(moveZeroes([0,0,1]))

// #array #two-pointer
// ##easy