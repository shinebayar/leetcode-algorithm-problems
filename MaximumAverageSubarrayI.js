// 643. Maximum Average Subarray I
// Easy like=1944 unlike=173

// Add to List

// Share
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000
 

// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104
// Accepted
// 168,897
// Submissions
// 384,964



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// Approach: Sliding window - pattern, technique
// Time complexity = O(n)
// Space complexity = O(1)
var findMaxAverage = function(nums, k) {
    let ans = -Infinity
    let sum = 0
    let j = 0
    
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
        if(i - j === k - 1){
            ans = Math.max(ans, sum/k)
            sum -= nums[j]
            j++
        }
    }

    return ans
};


console.log(findMaxAverage([1,12,-5,-6,50,3], 4))


// #array #sliding-window
// ##easy