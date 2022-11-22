// Easy like=3408 unlike=409

// Add to List

// Share
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// Accepted
// 750,159
// Submissions
// 1,342,971



/**
 * @param {number[]} nums
 * @return {number}
 */


// Approach: math
// Time complexity = O(n)
// Space complexity = O(1)
var findMaxConsecutiveOnes = function(nums) {
    let res = 0
    let tmp = 0
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            res = Math.max(res, tmp)    
            tmp = 0
        }else{
            tmp++
        }
    }
    
    return Math.max(tmp, res)
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))


// #array
// ##easy