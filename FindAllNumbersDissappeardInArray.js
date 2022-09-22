// 448. Find All Numbers Disappeared in an Array
// Easy like=7354 unlike=407

// Add to List

// Share
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
 

// Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Accepted
// 637,555
// Submissions
// 1,071,656


// Approach: Using hash-table DS
// Time complexity = O(n)
// Space complexity = O(n)
var findDisappearedNumbers = function(nums) {
    let obj = {}
    let res = []
    
    for(let i=0; i<nums.length; i++) obj[nums[i]] = nums[i]
    
    for(let i=0; i<nums.length; i++) if(i+1 !== obj[i+1]) res.push(i+1)
    
    return res
};

// console.log(findDisappearedNumbers([1,1]))



// Approach: Using math array (constant time)
// Time complexity = O(n)
// Space complexity = O(1)
var findDisappearedNumbers2 = function(nums) {
    let res = []
    
    for(let i=0; i<nums.length; i++){
        nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1])
    }

    for(let i=0; i<nums.length; i++) if(nums[i] > 0) res.push(i+1)
    
    return res
};

console.log(findDisappearedNumbers2([4,3,2,7,8,2,3,1]))



// #array #hash-table
// ##easy