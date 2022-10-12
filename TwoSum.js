// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Approach 1: brute force
// Time complexity = O(n2)
// Space complexity = O(1)
const TwoSum1 = (nums, target) => {
  for(let i=0; i<nums.length; i++){
    for(let j=0; j<nums.length; j++){
      if(nums[i] + nums[j] === target) return [i, j]
    }
  }
}

// console.log(TwoSum1([-1, -2, -3, -4, -5], -8))


// Approach 2: hash-table DS
// Time complexity = O(n)
// Space complexity = O(n)
const TwoSum = (nums, target) => {
  let hash = {}

  for(let i=0; i<nums.length; i++){
    if(hash[target - nums[i]] !== undefined) return [hash[target - nums[i]], i]
    hash[nums[i]] = i
  }
}

console.log(TwoSum([2,7,11,15], 9))


// #array #hash-table
// ##easy