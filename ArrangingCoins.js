// 441. Arranging Coins
// Easy like=2653 unlike=1107

// Add to List

// Share
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

 

// Example 1:


// Input: n = 5
// Output: 2
// Explanation: Because the 3rd row is incomplete, we return 2.
// Example 2:


// Input: n = 8
// Output: 3
// Explanation: Because the 4th row is incomplete, we return 3.
 

// Constraints:

// 1 <= n <= 231 - 1
// Accepted
// 310,226
// Submissions
// 675,089


/**
 * @param {number} n
 * @return {number}
 */


// Approach: Using math
// Time complexity = O(n)
// Space complexity = O(1)
var arrangeCoins = function(n) {
    let res = 0
    
    while(n > 0){
        if(res === 0){
            n--
            res++
        }else{
            n = n - (res + 1)
            res++
        }
        
    }
    
    return n === 0 ? res : res - 1
};

console.log(arrangeCoins(8))



// #math #binary-search
// ##easy