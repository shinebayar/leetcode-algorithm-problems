// 167. Two Sum II - Input Array Is Sorted
// Medium like=8.3K unlike=1.1K
// Companies
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.
// Accepted
// 1.3M
// Submissions
// 2.2M
// Acceptance Rate
// 60.0%






/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */




// Approach: binary-search algorithm
// Time complexity = O(nlogn)
// Space complexity = O(1)
var twoSum = function(numbers, target) {
    let i = 0

    while(i < numbers.length){
        let sub = target - numbers[i]
        let l = i + 1 
        let r = numbers.length - 1
        while(l < r){
            let mid = Math.floor((l + r) / 2)
            if(numbers[mid] === sub) return [i+1, mid+1]
            if(numbers[mid] > sub) r = mid - 1
            else l = mid + 1
        }
        if(sub === numbers[l]) return [i+1, l+1]
        i++
    }
};






// Approach: two-pointers
// Time complexity = O(logn)
// Space complexity = O(1)
var twoSum = function(numbers, target) {
    let l = 0, r = numbers.length - 1

    while(l < r){
        if(numbers[l] + numbers[r] === target) break
        if(numbers[l] + numbers[r] > target) r--
        else l++
    }

    return [l+1, r+1]
}







// #array #two-pointers #binary-search
// ##medium