// 53. Maximum Subarray
// Medium like=25532 unlike=1161

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Accepted
// 2,774,703
// Submissions
// 5,547,563


/**
 * @param {number[]} nums
 * @return {number}
 */


// Approach 1: brute force
// Time complexity = O(n2)
// Space complexity = O(1)
var maxSubArray1 = function(nums) {
    let ans = nums[0]

    for(let i=0; i<nums.length; i++){
        let sum = 0
        for(let j=i; j<nums.length; j++){
            sum += nums[j]
            if(sum > ans) ans = sum 
            console.log(sum)
        }
    }

    return ans
};

// console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4]))


// Approach 2: (Negative number doesn't contribute)
// Time complexity = O(n)
// Space complexity = O(1)
var maxSubArray = function(nums) {
    let maxSub = nums[0]
    let curSum = 0

    for(let i=0; i<nums.length; i++){
        if(curSum < 0) curSum = 0
        curSum += nums[i]
        maxSub = Math.max(maxSub, curSum)
    }

    return maxSub
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))



// #array #divide-and-conquer #dynamic-programming
// ##medium