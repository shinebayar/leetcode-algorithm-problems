// 326. Power of Three
// Easy like=2038 unlike=192

// Add to List

// Share
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?
// Accepted
// 587,734
// Submissions
// 1,303,862


/**
 * @param {number} n
 * @return {boolean}
 */

// Approach 1: Using math or brute force
// Time complexity = O(log3(n))
// Space complexity = O(1)
var isPowerOfThree = function(n) {
    if( n === 1 ) return true
   
    while( n > 3 ){
        n = n / 3
    }
    
    return n === 3
};

// Approach 2: Using recursion
// Time complexity = O(log3(n))
// Space complexity = O(1)
var isPowerOfThree = function(n) {
    if( n === 1 || n === 3 ) return true
    if( n < 3 || n % 3 !== 0) return false
    return isPowerOfThree(n/3)
}


// #math #recursion
// ##easy