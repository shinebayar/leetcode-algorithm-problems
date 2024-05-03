// 18. 4Sum
// Medium like=8163 unlike=950

// Add to List

// Share
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Accepted
// 678,814
// Submissions
// 1,864,303




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */



// Approach: brute-force
// Time complexity = O(n4)
// Time complexity = O(n)
var fourSum = function(nums, target) {
    nums.sort((a, b) => (a - b))
    let res = []
    
    for(let i=0; i<nums.length; i++){   
        if(i > 0 && nums[i] === nums[i-1]) continue
        for(let j=i+1; j<nums.length; j++){
            if(j > i+1 && nums[j] === nums[j-1]) continue
            for(let k=j+1; k<nums.length; k++){
                if(k > j+1 && nums[k] === nums[k-1]) continue
                for(let m=k+1; m<nums.length; m++){
                    if(m > k+1 &&  nums[m] === nums[m-1]) continue
                    if(nums[i] + nums[j] + nums[k] + nums[m] === target) res.push([nums[i], nums[j], nums[k], nums[m]])
                }
            }
        }
    }
    
    return res
};





// Approach: two-pointers technique
// Time complexity = O(n3)
// Time complexity = O(n)
var fourSum = function(nums, target) {
    if(nums.length < 3) return []
    nums = nums.sort((a, b) => a - b)
    let ans = [], left, right, total

    for(let i=0; i<nums.length-3; i++){
        for(let j=i+1; j<nums.length-2; j++){
            left = j + 1
            right = nums.length - 1
            while(left < right){
                total = nums[i] + nums[j] + nums[left] + nums[right]
                if(total < target) left++
                else if(total > target) right--
                else{
                    ans.push([nums[i], nums[j], nums[left], nums[right]]) 
                    while(nums[left] === nums[left + 1]) left++
                    while(nums[right] === nums[right - 1]) right--
                    left++
                    right--
                }
            }
            while(nums[j] === nums[j+1]) j++
        }
        while(nums[i] === nums[i+1]) i++
    }

    return ans
};










// #array #two-pointers #sorting
// ##medium