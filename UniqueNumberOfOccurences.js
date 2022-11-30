// 1207. Unique Number of Occurrences
// Easy like=2393 unlike=55

// Add to List

// Share
// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

 

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true
 

// Constraints:

// 1 <= arr.length <= 1000
// -1000 <= arr[i] <= 1000
// Accepted
// 189,012
// Submissions
// 263,228





/**
 * @param {number[]} arr
 * @return {boolean}
 */



// Approach: hash-map DS
// Time complexity = O(n)
// Space complexity = O(n)
var uniqueOccurrences = function(arr) {
    let map = new Map()
    
    for(let i=0; i<arr.length; i++){
        map.set(arr[i], map.get(arr[i]) + 1 || 1)
    }
    
    let d = []
    
    for(let [key, value] of map){
        if(d.includes(value)) return false
        else d.push(value)
    }
    
    return true
};





// #array #hash-table
// ##easy