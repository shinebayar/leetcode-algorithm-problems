// 231. Power of Two
// Easy like=3958 unlike=310

// Add to List

// Share
// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?
// Accepted
// 713,459
// Submissions
// 1,569,609



/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false


    let total = 0
    let i = 1

    while(total < n){
        total = Math.pow(2, i)
        i++
    }
    
    return total === n
};

console.log(isPowerOfTwo(1))

// #math #bit-manipulation #recursion
// ##easy

// Time complexity = O()