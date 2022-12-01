// 16. 3Sum Closest
// Medium like=8246 unlike=453

// Add to List

// Share
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104
// Accepted
// 960,231
// Submissions
// 2,081,944





/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */



// Approach: two-pointers technique
// Time complexity = O(n2)
// Space complexity = O(n)
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => (a - b))
    let closest = Infinity
    
    for(let i=0; i<nums.length; i++){
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
            sum = nums[i] + nums[left] + nums[right]
            if(sum === target) return sum
            if(Math.abs(sum - target) < Math.abs(closest - target)) closest = sum
            if(sum > target) right--
            else left++
        }
    }

    return closest
};


console.log(threeSumClosest([-1,2,1,-4], 1))




// #array #two-pointers
// ##medium