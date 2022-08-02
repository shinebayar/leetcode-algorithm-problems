// 136. Single Number
// Easy like-10730 unlike-404

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.
// Accepted 1,764,820
// Submissions 2,529,557

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = new Set()
    
    for(num of nums){
        if(res.has(num)) res.delete(num)
        else res.add(num)
    }

    return Array.from(res)[0]
};

console.log(singleNumber([4,1,2,1,2]))