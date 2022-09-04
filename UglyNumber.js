// 263. Ugly Number
// Easy like=1657 unlike=1115

// Add to List

// Share
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

 

// Example 1:

// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:

// Input: n = 1
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
// Example 3:

// Input: n = 14
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
 

// Constraints:

// -231 <= n <= 231 - 1
// Accepted
// 320,108
// Submissions
// 766,658



/**
 * @param {number} n
 * @return {boolean}
 */

// Time complexity = O(n)
// Space complexity = O(1) bacause we don't store anything
var isUgly = function(n) {
    if(n < 1) return false
    while(n != 1){
        if(n % 2 === 0) n /= 2
        else if(n % 3 === 0) n /= 3
        else if(n % 5 === 0) n /= 5
        else return false
        console.log(n)
    }
    
    return true
};

console.log(isUgly(15))



// #math
// ##easy