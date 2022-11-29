// 15. 3Sum
// Medium like=22751 unlike=2075

// Add to List

// Share
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
 

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105
// Accepted
// 2,386,661
// Submissions
// 7,379,807








/**
 * @param {number[]} nums
 * @return {number[][]}
 */




// Approach: brute-force
// Time complexity = O(n3)
// Space complexity = O(n)
// var threeSum = function(nums) {
//     let res = []
//     nums.sort((a, b) => a - b)
    
//     for(let i=0; i<nums.length; i++){
//         if(i > 0 && nums[i] === nums[i-1]) continue
//         for(let j=i+1; j<nums.length; j++){
//             if(j > i+1 && nums[j] === nums[j-1]) continue
//             for(let k=j+1; k<nums.length; k++){
//                 if(k > j+1 && nums[k] === nums[k-1]) continue
//                 if(nums[i] + nums[j] + nums[k] === 0){
//                     res.push([nums[i], nums[j], nums[k]])
//                 } 
//             }
//         }
//     }
        
//     return res
// };







// Approach: two-pointers technique
// Time complexity = O(n2)
// Space complexity = O(n)
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    let res = []
    
    for(let i=0; i<nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]) continue
        let target = 0 - nums[i]
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
            if(nums[left] + nums[right] > target) right--
            else if(nums[left] + nums[right] < target) left++
            else {
                res.push([nums[i], nums[left], nums[right]])
                while(nums[left] === nums[left + 1]) left++
                while(nums[right] === nums[right - 1]) right--
                left++
                right--
            }
        }
    }
        
    return res
};








// #array #two-pointers #sorting
// ##medium