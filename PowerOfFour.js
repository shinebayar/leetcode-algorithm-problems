// 342. Power of Four
// Easy like=2585 unlike=314

// Add to List

// Share
// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

// Follow up: Could you solve it without loops/recursion?
// Accepted
// 399,869
// Submissions
// 879,573

// Approach 1: Using math
// Time complexity = O(log4(n))
// Space complexity = O(1)
var isPowerOfFour = function(n) {
    while( n > 4 ){
        n /= 4
    }

    return n == 4 || n == 1
}

// console.log(isPowerOfFour(27))


// Approach 2: Using recurion
// Time complexity = O(log4(n))
// Space complexity = O(1)
var isPowerOfFour = function(n) {
    if( n === 1) return true
    if( n < 4 ) return false
    return isPowerOfFour(n/4)
};

// console.log(isPowerOfFour(25684247))


// Approach 2: Using recurion
// Time complexity = O(n) cause using slice() method
// Space complexity = O(1)
var isPowerOfFour = function(n) {
    if(n == 1) return true
    n = n.toString(2)
    return parseInt(n.slice(1)) == 0 && n.length % 2 == 1
};

console.log(isPowerOfFour(25684247))


// Approach 3: Using bit manipulation
// Time complexity = O(1)
// Space complexity = O(1)
var isPowerOfFour = function(n) {
    return (n > 0) && ((n & (n - 1)) == 0) && ((n & 0x55555555) == n)
};
// The basic idea is from power of 2, We can use "n&(n-1) == 0" to determine if n is power of 2. For power of 4, the additional restriction is that in binary form, the only "1" should always located at the odd position. For example, 4^0 = 1, 4^1 = 100, 4^2 = 10000. So we can use "num & 0x55555555==num" to check if "1" is located at the odd position.
// 01010101... = 0x55555555
// 101010101... = 0xaaaaaaaa
// if and this two with any binary it returns end equil with any binary you can get even or odd


// #math #recurion #bit-manipulation
// ##easy