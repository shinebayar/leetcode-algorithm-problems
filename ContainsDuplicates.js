// 217. Contains Duplicate
// Easy like=6284 unlike=1013

// Add to List

// Share
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// Accepted
// 1,974,914
// Submissions
// 3,230,500



/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Using Map object
var containsDuplicate1 = function(nums) {
    let map = new Map()

    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])) return true
        else map.set(nums[i], nums[i])
    }

    return false
};

console.log(containsDuplicate1([1,2,3,1]))

// Using Map object
var containsDuplicate1 = function(nums) {
    let object = {}

    for(let i=0; i<nums.length; i++){
        if(object[nums[i]]) return true
        else object[nums[i]] = 1
    }

    return false
};

console.log(containsDuplicate1([1,2,3,1]))

// Time complexity = O(n)
// Space complexity = O(n)


// #array #hash-table #sorting
// ##easy