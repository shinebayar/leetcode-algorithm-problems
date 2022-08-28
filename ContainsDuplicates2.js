// 219. Contains Duplicate II
// Easy like=3005 unlike=2068

// Add to List

// Share
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105
// Accepted
// 510,859
// Submissions
// 1,250,319

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Approach 1: Using brute force (double iteration)
// Time complexity = O(n2)
// Space complexity = O(1)
var containsNearbyDuplicate1 = function(nums, k) {
    let one

    for(let i=0; i<nums.length; i++){
        one = nums[i]
        for(let j=i+1; j<nums.length; j++){
            if(one === nums[j]){
                if(Math.abs(j - i) <= k) return true
            }
        }
    }

    return false
};

// console.log(containsNearbyDuplicate1([1,2,3,1], 3))


// Approach 2: Using hash table data structure
// Time complexity = O(n)
// Space complexity = O(n)
var containsNearbyDuplicate2 = function(nums, k) {
    let obj = {}

    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]] !== undefined && Math.abs(i-obj[nums[i]]) <= k) return true
        else obj[nums[i]] = i
    }

    return false
}

// console.log(containsNearbyDuplicate2([1,2,3,1], 3))



// Approach 3: Using sliding window technique
// Time complexity = O(n)
// Space complexity = O(1)
var containsNearbyDuplicate3 = function(nums, k) {
    // declare window
    let map = new Map()

    for(let i=0; i<nums.length; i++){

        // delete the leftest value to slide window fixed size
        if(map.size > k) map.delete(nums[i-k-1])

        // if value occurs second time in window return true
        if(map.has(nums[i])) return true

        // add value to window
        map.set(nums[i])
    }

    return false
}

console.log(containsNearbyDuplicate3([1,2,3,8,4,5,1,4,5,6], 3))

// #array #hash-table #sliding-window
// ##easy

