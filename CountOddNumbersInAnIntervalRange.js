// 1523. Count Odd Numbers in an Interval Range
// Easy like=1.7K unlike=108
// Companies
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].
 

// Constraints:

// 0 <= low <= high <= 10^9
// Accepted
// 208.3K
// Submissions
// 439.5K
// Acceptance Rate
// 47.4%


/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */


// Approach: math
// Time complexity = O(n)
// Space complexity = O(1)
var countOdds = function(low, high) {
    let count = 0

    for(let i=low; i<=high; i++) if(i % 2 !== 0) count++

    return count
};


// #math
// ##easy