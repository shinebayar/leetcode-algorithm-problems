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
// Time complexity = O(sqrt(n))
// Space complexity = O(1)
var arrangeCoins1 = function(n) {
    let row = 1
    
    while(n > 0){
        row++
        n = n - row
    }
    
    return row - 1
};

console.log(arrangeCoins1(8))




// Approach: binary-search algorithm
// Time complexity = O(log(n))
// Space complexity = O(1
var arrangeCoins = function(n) {
    let left = 1
    let right = n
    let res = 0
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        let coins = (mid / 2) * (mid + 1)
        if(coins > n){
            right = mid - 1    
        }else{
            left = mid + 1
            res = Math.max(mid , res)
        }
    }
    
    return res
};



// #math #binary-search
// ##easy