// 287. Find the Duplicate Number
// Medium like=17.4K unlike=2.4K
// Companies
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
 

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
 

// Follow up:

// How can we prove that at least one duplicate number must exist in nums?
// Can you solve the problem in linear runtime complexity?
// Accepted
// 1.1M
// Submissions
// 1.8M
// Acceptance Rate
// 59.1%











/**
 * @param {number[]} nums
 * @return {number}
 */




// Approach: hash-map data structure
// Time complexity = O(n)
// Space complexity = O(n)
var findDuplicate = function(nums) {
    let map = new Map()
    for(let i=0; i<nums.length; i++){
        map.set(nums[i], map.get(nums[i]) + 1 || 1)
        if(map.get(nums[i]) === 2) return nums[i]
    }
};



// Approach: Marking visited value within the array
// Time complexity = O(n)
// Space complexity = O(1)
var findDuplicate = function(nums) {
    for(let i=0; i<nums.length; i++){
        let index = Math.abs(nums[i])
        if(nums[index] < 0) return Math.abs(nums[i])
        nums[index] = -nums[index]
    }
};






// Approach: two-pointers technique (fast and slow)
// Time complexity = O(n)
// Space complexity = O(1)
// The main idea is the same with problem Linked List Cycle II,https://leetcode.com/problems/linked-list-cycle-ii/. 
// Use two pointers the fast and the slow. The fast one goes forward two steps each time, while the slow one goes 
// only step each time. They must meet the same item when slow==fast. In fact, they meet in a circle, the duplicate 
// number must be the entry point of the circle when visiting the array from nums[0]. Next we just need to find the 
// entry point. We use a point(we can use the fast one before) to visit form begining with one step each time, do the 
// same job to slow. When fast==slow, they meet at the entry point of the circle. The easy understood code is as follows.
var findDuplicate = function(nums) {
    let slow = nums[0]
    let fast = nums[nums[0]]

    while(slow !== fast){
        slow = nums[slow]
        fast = nums[nums[fast]]
    }

    slow = 0

    while(slow !== fast){
        slow = nums[slow]
        fast = nums[fast]
    }

    return slow
};







// #array #two-pointers #binary-search #bit-manipulation
// ##medium



















