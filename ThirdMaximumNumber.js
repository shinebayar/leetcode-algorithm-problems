// 414. Third Maximum Number
// Easy like=1981 unlike=2491

// Add to List

// Share
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Can you find an O(n) solution?


/**
 * @param {number[]} nums
 * @return {number}
 */

// Approach 1: Using sort
// Time complexity = O(n2)
// Space complexity = O(1)
var thirdMax = function(nums) {
    let tmp
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] === nums[j]) {
                nums.splice(j, 1)
                j = i
                continue
            }
            else {
                if(nums[i] < nums[j]){
                    tmp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = tmp
                }
            }
        }
        
    }
    
    return nums.length >= 3 ? nums[2] : nums[0]
};

// console.log(thirdMax([1,1,2]))



// Approach 2: Using math
// Time complexity = O(n)
// Space complexity = O(1)
 var thirdMax = function(nums) {
    let first = second = third = -Infinity
    
    for(let i=0; i<nums.length; i++){
        if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
        if(nums[i] > first) [first, second, third] = [nums[i], first, second]
        else if(nums[i] > second) [second, third] = [nums[i], second]
        else if(nums[i] > third) third = nums[i]
    }
    
    console.log(third, second, first)
    
    return third === -Infinity ? first : third
};

console.log(thirdMax([2,2,3,1]))


// #array #sorting
// ##easy