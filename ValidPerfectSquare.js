// 367. Valid Perfect Square
// Easy like=2810 unlike=253

// Add to List

// Share
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

 

// Example 1:

// Input: num = 16
// Output: true
// Example 2:

// Input: num = 14
// Output: false
 

// Constraints:

// 1 <= num <= 2^31 - 1
// Accepted
// 412,950
// Submissions
// 955,269



/**
 * @param {number} num
 * @return {boolean}
 */


// Appoach 1: Using math
// Time complexity = O(n)
// Space complexity = O(1)
var isPerfectSquare1 = function(num) {
    // let n = 1
    // let j = 0
    
    // while( n < num ){
    //     console.log(j, n)
    //     n = j + 1
    //     j++
    //     n = n * n
        
    // }
    
    // return n === num


    var sum = 0;
    for(let i = 1; i <= num; i += 2){
        console.log(i, sum)
        sum += i;
        if(sum === num){
            return true;
        }
    }
    return false;
};

// console.log(isPerfectSquare1(16))



// Appoach 2: Using binary search algorithm
// Time complexity = O(logn)
// Space complexity = O(1)
var isPerfectSquare2 = function(num) {
    let left = 1
    let right = num
    
    while( left <= right ){
        let mid = Math.floor((left + right) / 2)
        if(mid * mid === num) return true
        if(mid * mid < num) left = mid + 1
        else right = mid - 1
    }
    
    return false
};

console.log(isPerfectSquare2(65))


// #math #binary-search
// ##easy