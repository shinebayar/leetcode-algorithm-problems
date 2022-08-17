// 169. Majority Element
// Easy like=11299 unlike=371

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?
// Accepted
// 1,371,581
// Submissions
// 2,158,376


/**
 * @param {number[]} nums
 * @return {number}
 */

// Approach #1 Using map object of javascript
// Time complexity = O(n)
// Space complexity = O(n)
 var majorityElement1 = function(nums) {
    let map = new Map()
    
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1)
        else map.set(nums[i], 1)

        if(map.get(nums[i]) > nums.length/2) return nums[i]
    }
};

// Approach #2 Using Boyer Moore algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var majorityElement2 = function(nums) {
    let res, count = 0

    for(num of nums){
        if(count === 0) res = num
        count = count + ( num === res ? 1 : -1 )
    }
    console.log(res)
    return res
};

// Approach #3 Using sorting
// Time complexity = O(n2)
// Space complexity = O(1)
var majorityElement = function(nums) {
    let res, count = 0

    for(num of nums.sort()){
        if(res === num ) count += 1
        else {
            res = num
            count = 0
            count += 1
        }

        if(count > nums.length/2){
            return num
        }
    }
};

majorityElement([2,2,1,1,1,2,2])

// #array #hash-table #divide-and-conquer #sorting #counting
// ##easy

// Time complexity = 
// Space complexity