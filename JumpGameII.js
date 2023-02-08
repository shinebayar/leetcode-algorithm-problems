// 45. Jump Game II
// Medium like=11.2K unlike=385
// Companies
// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// Accepted
// 807.3K
// Submissions
// 2.1M
// Acceptance Rate
// 39.3%







/**
 * @param {number[]} nums
 * @return {number}
 */



// Approach: Greedy algorithm
// Time complexity = O(n)
// Space complexity = O(1)
var jump = function(nums) {
    let l = 0, r = 0, res = 0

    while(r < nums.length - 1){
        let longest = 0
        for(l; l<=r; l++) longest = Math.max(longest, l + nums[l])
        l = r + 1
        r = longest
        res++
    }

    return res
};













// #array #greedy #dynamic-programming
// ##medium