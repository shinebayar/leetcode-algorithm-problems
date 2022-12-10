// 189. Rotate Array
// Medium like=12.3K unlike=1.5K
// Companies
// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
// Accepted
// 1.3M
// Submissions
// 3.4M
// Acceptance Rate
// 39.2%







/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */




// Approach: two-pointers technique
// Time complexity = O(2n) ~ O(n)
// Space complexity = O(1)
 var rotate = function(nums, k) {
    if (k === 0 || k % nums.length === 0) return nums

    k = k % nums.length

    swap(0, nums.length - k - 1)
    swap(nums.length - k, nums.length - 1)
    swap(0, nums.length - 1)

    function swap(i, j){
        while(i < j){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
            j--
        }
    }

    return nums
};






// #array #two-pointers #math
// ##medium