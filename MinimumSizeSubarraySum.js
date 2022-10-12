// 209. Minimum Size Subarray Sum
// Medium like=7982 unlike=223

// Add to List

// Share
// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
// Accepted
// 612,840
// Submissions
// 1,381,226



/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */


// Approach: Using brute force
// Time complexity = O(n2)
// Space complexity = O(1)
var minSubArrayLen1 = function(target, nums) {
    let min_length = 0
    let sum = 0

    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            sum += nums[j]
            if(sum >= target){
                if(min_length === 0) min_length = j + 1 - i
                else min_length = Math.min(min_length, j + 1 - i)
                sum = 0
                break
            }
        }
        sum = 0
    }

    return min_length
};

// console.log(minSubArrayLen1(11, [1,1,1,1,1,1,1,1]))



<<<<<<< HEAD
// Approach: sliding-window pattern
=======
// Approach: sliding-window technique or pattern
>>>>>>> medium
// Time complexity = O(n)
// Space complexity = O(1)
var minSubArrayLen2 = function(target, nums) {
    let min_length = 0
    let left = 0
    let sum = 0

    for(let right=0; right<nums.length; right++){
        sum += nums[right]

        while(sum >= target){
            if(min_length === 0) min_length = right - left + 1
            else min_length = Math.min(min_length, right - left + 1)
            sum -= nums[left]
            left++
        }
    }

    return min_length
};

// console.log(minSubArrayLen2(7, [2,3,1,2,4,3]))


// Approach 2: hash-table DS
// Time complexity = O()
// Space complexity = O()
var minSubArrayLen = function(target, nums) {
    let min_length = 0
    let sum = 0
    let prefixSum = new Array(nums.length)

    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        prefixSum[i] = sum
    }

    for(let i=nums.length-1; i>=0; i--){
        sum -= nums[i]
    }

    console.log(prefixSum)

    return min_length
};

// console.log(minSubArrayLen(7, [2,3,1,2,4,3]))



// #array #binary-search #sliding-window #prefix-sum
// ##medium

