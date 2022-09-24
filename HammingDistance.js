// 461. Hamming Distance
// Easy like=3276 unlike=202

// Add to List

// Share
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

 

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.
// Example 2:

// Input: x = 3, y = 1
// Output: 1
 

// Constraints:

// 0 <= x, y <= 231 - 1
// Accepted
// 493,896
// Submissions
// 660,770




/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */


// Approach using: math
// Time complexity = O(n)
// Space complexity = O(1)
var hammingDistance1 = function(x, y) {
    let res = 0
    x = x.toString(2)
    y = y.toString(2)
    let p1 = x.length
    let p2 = y.length
    
    while(p1 >= 0 || p2 >= 0){
        if((x[p1] || '0') !== (y[p2] || '0')) res++
        p1--
        p2--
    }
    
    return res
};


// console.log(hammingDistance1(1,4))



// Approach using: bit manipulation
// Time complexity = O()
// Space complexity = O(1)
var hammingDistance = function(x, y) {
    let res = 0
    let xor = x ^ y

    while(xor > 0){
        xor = xor & xor - 1
        res++
    }
    
    return res
};

console.log(hammingDistance(1,4))



// #bit-manipulation
// ##easy