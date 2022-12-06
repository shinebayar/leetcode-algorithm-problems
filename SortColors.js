// 75. Sort Colors
// Medium like=13.2K unlike=480
// Companies
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

// Accepted
// 1.3M
// Submissions
// 2.2M
// Acceptance Rate
// 57.5%





/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



// Approach: two-pointers technique
// Time complexity = O(n)
// Space complexity = O(1)
var sortColors = function(nums) {
    const swap = (i, j) => {
        let tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }

    let left = 0, right = nums.length - 1
    let i = 0

    while(i <= right){
        // swap to right and decrement right. Don't increment i because after swapping element
        // element in position i may be 0 or 2
        if(nums[i] === 2){
            swap(i, right)
            right--
        // swap to left and increment left. We increment i by 1 because after the swapping the element
        // in position i must be 1, since the index i already went through left position
        }else if(nums[i] === 0){
            swap(i, left)
            left++
            i++
        // if the element is 1 just continue
        }else{
            i++
        }
    }

    return nums
};







// #array #two-pointers #sorting
// ##medium