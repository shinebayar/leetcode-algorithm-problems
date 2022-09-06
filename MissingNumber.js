// 268. Missing Number
// Easy like=7214 unlike=2966

// Add to List

// Share
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
 

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Accepted
// 1,212,513
// Submissions
// 1,982,068


/**
 * @param {number[]} nums
 * @return {number}
 */


// Approach 1: Using hash-table 
// Time complexity = O(n)
// Space complexity = O(n)
var missingNumber1 = function(nums) {
    let obj = {}
    
    for(i of nums) obj[i] = 1
    
    for(let i=0; i<=nums.length; i++){
        if(obj[i] === undefined) return i
    }
}

// console.log(missingNumber1([0,1]))


// Approach 2: Using sort
// Time complexity = O(n2)
// space complexity = O(1)
var missingNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] > nums[j]){
                let tmp = nums[i]
                nums[i] = nums[j]
                nums[j] = tmp
            }
        }
    }
    
    for(let i=0; i<=nums.length; i++){
        if(i !== nums[i]) return i
    }
};

// console.log(missingNumber1([0,1]))


// Approach 3: Using math cleverly
// Time complexity = O(n)
// space complexity = O(1)
 var missingNumber = function(nums) {
    let sumOfIndexes = nums.length
    let sum = 0

    for(let i=0; i<nums.length; i++){
        sumOfIndexes += i
        sum += nums[i] 
    }

    return sumOfIndexes - sum
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))

// #array #hash-table #math #binary-search #bit-manipulation #sorting
// ##easy